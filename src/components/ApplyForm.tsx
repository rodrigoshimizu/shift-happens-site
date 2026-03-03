import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

const applySchema = z.object({
  nome: z.string().trim().min(1, "Campo obrigatório").max(100),
  sobrenome: z.string().trim().min(1, "Campo obrigatório").max(100),
  celular: z.string().trim().min(1, "Campo obrigatório").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  linkedin: z.string().trim().min(1, "Campo obrigatório").max(500),
  cep: z.string().trim().min(1, "Campo obrigatório").max(10),
  experiencia: z.string().min(1, "Campo obrigatório"),
  nivel: z.string().min(1, "Campo obrigatório"),
  hierarquia: z.string().min(1, "Campo obrigatório"),
  reportes: z.string().min(1, "Campo obrigatório"),
  tamanhoEmpresa: z.string().min(1, "Campo obrigatório"),
  faturamento: z.string().min(1, "Campo obrigatório"),
  informacoesAdicionais: z.string().max(2000).optional(),
  comoSoube: z.string().min(1, "Campo obrigatório"),
  aceitaSms: z.boolean().optional(),
  aceitaNewsletter: z.boolean().optional(),
});

type ApplyFormData = z.infer<typeof applySchema>;

const experienciaOptions = [
  "Menos de 10 anos",
  "10–15 anos",
  "15–20 anos",
  "20–25 anos",
  "25–30 anos",
  "Mais de 30 anos",
];

const nivelOptions = [
  "C-Level (CEO, CFO, COO, etc.)",
  "Vice-Presidente / SVP",
  "Diretor(a)",
  "Gerente Sênior",
  "Outro",
];

const hierarquiaOptions = [
  "Eu sou o CEO",
  "1 nível",
  "2 níveis",
  "3 níveis",
  "4 ou mais níveis",
];

const reportesOptions = [
  "Nenhum",
  "1–10",
  "11–50",
  "51–200",
  "201–1.000",
  "Mais de 1.000",
];

const tamanhoEmpresaOptions = [
  "1–50 funcionários",
  "51–200 funcionários",
  "201–1.000 funcionários",
  "1.001–5.000 funcionários",
  "5.001–10.000 funcionários",
  "Mais de 10.000 funcionários",
];

const faturamentoOptions = [
  "Até R$ 10 milhões",
  "R$ 10–50 milhões",
  "R$ 50–200 milhões",
  "R$ 200 milhões – R$ 1 bilhão",
  "Mais de R$ 1 bilhão",
];

const comoSoubeOptions = [
  "LinkedIn",
  "Indicação de amigo/colega",
  "Google",
  "Evento",
  "Mídia / Imprensa",
  "Outro",
];

interface ApplyFormProps {
  onSuccess?: () => void;
}

const ApplyForm = ({ onSuccess }: ApplyFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      aceitaSms: false,
      aceitaNewsletter: false,
    },
  });

  const onSubmit = async (data: ApplyFormData) => {
    const { error } = await supabase.from("applications").insert({
      nome: data.nome,
      sobrenome: data.sobrenome,
      celular: data.celular,
      email: data.email,
      linkedin: data.linkedin,
      cep: data.cep,
      experiencia: data.experiencia,
      nivel: data.nivel,
      hierarquia: data.hierarquia,
      reportes: data.reportes,
      tamanho_empresa: data.tamanhoEmpresa,
      faturamento: data.faturamento,
      informacoes_adicionais: data.informacoesAdicionais || null,
      como_soube: data.comoSoube,
      aceita_sms: data.aceitaSms ?? false,
      aceita_newsletter: data.aceitaNewsletter ?? false,
    });

    if (error) {
      toast.error("Erro ao enviar inscrição. Tente novamente.");
      console.error("Insert error:", error.message);
      return;
    }

    setSubmitted(true);
    toast.success("Inscrição enviada com sucesso!");
    setTimeout(() => onSuccess?.(), 2000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="text-4xl">✅</div>
        <h3 className="text-2xl font-bold text-foreground">Inscrição enviada!</h3>
        <p className="text-muted-foreground">
          Obrigado pelo interesse no SHIFT. Entraremos em contato em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h2 className="text-2xl font-bold text-foreground mb-2">Formulário de Inscrição</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Nome" error={errors.nome?.message} required>
          <Input {...register("nome")} placeholder="Seu nome" />
        </FormField>
        <FormField label="Sobrenome" error={errors.sobrenome?.message} required>
          <Input {...register("sobrenome")} placeholder="Seu sobrenome" />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Celular" error={errors.celular?.message} required>
          <Input {...register("celular")} placeholder="(11) 99999-9999" type="tel" />
        </FormField>
        <FormField label="Email" error={errors.email?.message} required>
          <Input {...register("email")} placeholder="seu@email.com" type="email" />
        </FormField>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="LinkedIn" error={errors.linkedin?.message} required>
          <Input {...register("linkedin")} placeholder="linkedin.com/in/seuperfil" />
        </FormField>
        <FormField label="CEP" error={errors.cep?.message} required>
          <Input {...register("cep")} placeholder="00000-000" />
        </FormField>
      </div>

      <SelectField
        label="Quantos anos de experiência profissional você possui?"
        options={experienciaOptions}
        error={errors.experiencia?.message}
        value={watch("experiencia")}
        onChange={(v) => setValue("experiencia", v, { shouldValidate: true })}
        required
      />

      <SelectField
        label="Qual seu nível profissional atual / recente?"
        options={nivelOptions}
        error={errors.nivel?.message}
        value={watch("nivel")}
        onChange={(v) => setValue("nivel", v, { shouldValidate: true })}
        required
      />

      <SelectField
        label="Quantos níveis hierárquicos existem entre você e o CEO na sua organização atual / recente?"
        options={hierarquiaOptions}
        error={errors.hierarquia?.message}
        value={watch("hierarquia")}
        onChange={(v) => setValue("hierarquia", v, { shouldValidate: true })}
        required
      />

      <SelectField
        label="Quantos funcionários se reportam a você direta/indiretamente atualmente / recentemente?"
        options={reportesOptions}
        error={errors.reportes?.message}
        value={watch("reportes")}
        onChange={(v) => setValue("reportes", v, { shouldValidate: true })}
        required
      />

      <SelectField
        label="Qual é o tamanho da sua empresa atual / recente?"
        options={tamanhoEmpresaOptions}
        error={errors.tamanhoEmpresa?.message}
        value={watch("tamanhoEmpresa")}
        onChange={(v) => setValue("tamanhoEmpresa", v, { shouldValidate: true })}
        required
      />

      <SelectField
        label="Qual é a faixa de faturamento anual da sua empresa atual / recente?"
        options={faturamentoOptions}
        error={errors.faturamento?.message}
        value={watch("faturamento")}
        onChange={(v) => setValue("faturamento", v, { shouldValidate: true })}
        required
      />

      <FormField label="Por favor compartilhe qualquer outra informação sobre sua carreira que gostaria que soubéssemos..." error={errors.informacoesAdicionais?.message}>
        <Textarea {...register("informacoesAdicionais")} placeholder="Opcional" rows={3} />
      </FormField>

      <SelectField
        label="Como ficou sabendo do SHIFT?"
        options={comoSoubeOptions}
        error={errors.comoSoube?.message}
        value={watch("comoSoube")}
        onChange={(v) => setValue("comoSoube", v, { shouldValidate: true })}
        required
      />

      <div className="space-y-3 pt-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="aceitaSms"
            checked={watch("aceitaSms")}
            onCheckedChange={(checked) => setValue("aceitaSms", !!checked)}
          />
          <Label htmlFor="aceitaSms" className="text-sm text-muted-foreground leading-snug cursor-pointer">
            Aceito receber SMS / WhatsApp com atualizações sobre o SHIFT
          </Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox
            id="aceitaNewsletter"
            checked={watch("aceitaNewsletter")}
            onCheckedChange={(checked) => setValue("aceitaNewsletter", !!checked)}
          />
          <Label htmlFor="aceitaNewsletter" className="text-sm text-muted-foreground leading-snug cursor-pointer">
            Aceito receber newsletter com informações sobre carreira do SHIFT
          </Label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

// Reusable field wrapper
const FormField = ({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm font-medium text-foreground">
      {label} {required && <span className="text-accent">*</span>}
    </Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

// Reusable select field
const SelectField = ({
  label,
  options,
  error,
  value,
  onChange,
  required,
}: {
  label: string;
  options: string[];
  error?: string;
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => (
  <div className="space-y-1.5">
    <Label className="text-sm font-medium text-foreground">
      {label} {required && <span className="text-accent">*</span>}
    </Label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Selecione..." />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt} value={opt}>
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default ApplyForm;
