import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { PropsWithChildren, useEffect, useRef } from "react";

interface ModalProps extends PropsWithChildren {
  title: string;
  open: boolean;
  onClose: () => void;
}

export function Modal({ title, open, onClose, children }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/[0.76] backdrop-blur-sm"
            aria-label="Close modal"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.25 }}
            className="glass-panel relative max-h-[88vh] w-full max-w-3xl overflow-auto rounded-lg p-5 fine-scrollbar"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 id="modal-title" className="text-xl font-black">
                {title}
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition hover:bg-white/[0.15]"
                aria-label="Close modal"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
