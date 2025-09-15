import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

type ModalVariant = "default" | "success" | "warning" | "error" | "info";
type ModalSize = "sm" | "default" | "lg" | "xl" | "full";

interface ModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  size?: ModalSize;
  showCloseButton?: boolean;
  footer?: ReactNode;
  variant?: ModalVariant;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export default function Modal({
  trigger,
  title = "modal",
  description,
  children,
  size = "default",
  showCloseButton = true,
  footer,
  variant = "default",
  open,
  onOpenChange,
  className = "",
}: ModalProps) {
  const sizeClasses: Record<ModalSize, string> = {
    sm: "max-w-md",
    default: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]",
  };

  const variantIcons: Record<ModalVariant, ReactNode> = {
    default: null,
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className={`${sizeClasses[size]} ${className}`}>
        {showCloseButton && (
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        )}

          <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {variantIcons[variant]}
                {title}
              </DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

        <div className="py-4">{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
