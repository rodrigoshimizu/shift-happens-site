import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

// Substitua pela URL do seu formulário Tally
const TALLY_FORM_URL = "https://tally.so/r/SEU_FORM_ID";

interface ApplyFormDialogProps {
  children: ReactNode;
}

const ApplyFormDialog = ({ children }: ApplyFormDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl w-full h-[85vh] p-0 overflow-hidden">
        <iframe
          src={TALLY_FORM_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          title="Formulário de Aplicação SHIFT"
          className="rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ApplyFormDialog;
