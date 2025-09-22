"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import * as Popover from "@radix-ui/react-popover";
import { ThreeBarsIcon } from "@primer/octicons-react";
import MenuItems from "./menuItems";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({ className = "", ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="ghost"
            className={`md:hidden hover:bg-secondary transition-colors duration-200 !p-3 rounded-none ${className}`}
            {...props}
          >
            <ThreeBarsIcon className="size-5" />
          </Button>
        </motion.div>
      </Popover.Trigger>

      <Popover.Portal>
        <AnimatePresence>
          {open && (
            <Popover.Content
                className="bg-background border-2 border-secondary rounded-lg shadow-lg w-auto p-[20px] z-101 md:hidden"
                side="bottom"
                align="end"
                sideOffset={16}
              >
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="origin-top overflow-hidden "
              >
                
                  <div className="flex flex-col">
                    <MenuItems className="flex flex-col gap-[20px]" />
                    
                  </div>
                <Popover.Arrow className="fill-card" />
                </motion.div>
            </Popover.Content>
          )}
        </AnimatePresence>
      </Popover.Portal>
    </Popover.Root>
  );
}
