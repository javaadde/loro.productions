import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type MobileMenuProps = {
  open: boolean;
  navItems: NavItem[];
  onClose: () => void;
};

export function MobileMenu({ open, navItems, onClose }: MobileMenuProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: 22 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.14 + index * 0.07,
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[5] bg-black/82 backdrop-blur-[8px]"
            onClick={onClose}
          />
          <motion.nav
            key="menu"
            id="mobileMenu"
            aria-label="Mobile"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[6] flex w-full max-w-[430px] flex-col overflow-hidden border-l border-black/10 bg-background px-3 pb-6 pt-5 text-foreground shadow-[-24px_0_80px_rgba(0,0,0,0.28)]"
          >
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ delay: 0.08, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex items-start justify-end border-b border-black/10 px-1 pb-5"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-black text-white transition-colors duration-200 hover:bg-black/85"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>

            <div className="flex-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                  aria-current={item.active ? "page" : undefined}
                  className="group relative block border-b border-black/12 py-4"
                >
                  <span
                    className={cn(
                      "block font-display text-[clamp(40px,10vw,52px)] uppercase leading-none tracking-[-0.08em] text-foreground/72 transition-colors duration-200 group-active:text-foreground group-hover:text-foreground",
                      item.active && "text-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-x-0 bottom-[5px] h-px bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.22)_0_2px,transparent_2px_6px)] opacity-75 transition-opacity duration-200",
                      item.active && "opacity-100",
                    )}
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ delay: 0.4, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 border-t border-black/10 pt-4"
            >
              <Button
                asChild
                variant="secondary"
                className="h-12 w-full border border-black/10 text-[15px] font-medium tracking-[-0.01em] shadow-none"
              >
                <a href="tel:+917602937442" onClick={onClose}>
                  <Phone className="h-3.5 w-3.5" />
                  +91 7602937442
                </a>
              </Button>
            </motion.div>
          </motion.nav>
        </>
      ) : null}
    </AnimatePresence>
  );
}
