"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCardMOdal } from "@/hooks/use-card-modal";

export const CardModal = () => {
  const id = useCardMOdal((state) => state.id);
  const isOpen = useCardMOdal((state) => state.isOpen);
  const onClose = useCardMOdal((state) => state.onClose);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>This is a Modal</DialogContent>
    </Dialog>
  );
};
