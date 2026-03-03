import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import ApplyForm from "./ApplyForm";

interface ApplyFormDialogProps {
  children: ReactNode;
}

const ApplyFormDialog = ({ children }: ApplyFormDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <ApplyForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ApplyFormDialog;
