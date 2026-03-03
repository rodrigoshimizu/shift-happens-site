
-- Create table for SHIFT applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  sobrenome TEXT NOT NULL,
  celular TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  cep TEXT NOT NULL,
  experiencia TEXT NOT NULL,
  nivel TEXT NOT NULL,
  hierarquia TEXT NOT NULL,
  reportes TEXT NOT NULL,
  tamanho_empresa TEXT NOT NULL,
  faturamento TEXT NOT NULL,
  informacoes_adicionais TEXT,
  como_soube TEXT NOT NULL,
  aceita_sms BOOLEAN DEFAULT false,
  aceita_newsletter BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form, no auth required)
CREATE POLICY "Anyone can submit an application"
ON public.applications
FOR INSERT
WITH CHECK (true);

-- Only service role can read applications (admin access)
CREATE POLICY "Service role can read applications"
ON public.applications
FOR SELECT
USING (false);
