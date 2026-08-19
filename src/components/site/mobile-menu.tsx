import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 z-[5] bg-black/60 backdrop-blur-[6px]"
            onClick={onClose}
          />
          <motion.nav
            key="menu"
            id="mobileMenu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -14, x: "-50%", scale: 0.97 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -14, x: "-50%", scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-[calc(clamp(16px,2.4vh,28px)+48px+14px)] z-[6] flex w-[min(420px,calc(100%-32px))] flex-col rounded-[28px] bg-white px-[18px] pb-5 pt-[22px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 + index * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative block rounded-[14px] px-2.5 py-[13px] text-center text-[15px] font-medium tracking-[-0.01em] text-[#2e2e2e] transition-colors duration-200 hover:bg-black/[0.04]",
                  item.active && "mobile-active-dots",
                )}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button asChild variant="secondary" className="mt-2 h-12 w-full text-[15px] font-medium tracking-[-0.01em]">
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
