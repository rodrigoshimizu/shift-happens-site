import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import ApplyForm from "./ApplyForm";
import logoShift from "@/assets/logo-shift.jpeg";

interface ApplyFormDialogProps {
  children: ReactNode;
}

const ApplyFormDialog = ({ children }: ApplyFormDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <div className="flex items-start mb-4">
          <img src={logoShift} alt="SHIFT" className="h-10 w-auto rounded" />
        </div>
        <ApplyForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ApplyFormDialog;
