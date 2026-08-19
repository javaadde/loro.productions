import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
  active?: boolean;
};

type SiteHeaderProps = {
  navItems: NavItem[];
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export function SiteHeader({ navItems, menuOpen, onMenuToggle }: SiteHeaderProps) {
  return (
    <header className="relative z-[7] flex w-full max-w-[720px] shrink-0 items-center justify-center gap-[clamp(18px,2.8vw,28px)] motion-safe:animate-[slideDown_0.7s_cubic-bezier(0.22,1,0.36,1)_both] max-[720px]:max-w-none max-[720px]:justify-between">
      <a
        className="grid h-[clamp(40px,4.4vw,46px)] w-[clamp(40px,4.4vw,46px)] shrink-0 place-items-center rounded-full border border-black/15 bg-[#f45517] shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:scale-105 max-[720px]:h-12 max-[720px]:w-12"
        href="#"
        aria-label="Loro Productions - Home"
      >
        <img
          src="/loro logo black.png"
          alt=""
          width={52}
          height={52}
          className="h-7 w-7 object-contain"
        />
      </a>

      <nav
        aria-label="Primary"
        className="flex h-[clamp(44px,5.2vw,48px)] max-w-[430px] flex-1 items-center justify-evenly rounded-full border border-black/10 bg-[rgba(248,241,228,0.8)] px-2 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.16)] backdrop-blur-[10px] max-[720px]:hidden"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={cn(
              "relative flex h-full items-center px-1.5 text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] text-[#2e2e2e] transition-opacity duration-200 hover:opacity-75",
              item.active ? "nav-active-dots opacity-100" : "opacity-50",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button
        asChild
        variant="secondary"
        className="h-[clamp(44px,5.2vw,48px)] px-[clamp(16px,2.4vw,24px)] text-[clamp(13px,1.4vw,15px)] font-medium tracking-[-0.01em] max-[720px]:hidden"
      >
        <a href="tel:+917602937442">
          <Phone className="h-3.5 w-3.5" />
          +91 7602937442
        </a>
      </Button>

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobileMenu"
        onClick={onMenuToggle}
        className={cn(
          "hidden h-12 items-center gap-2 rounded-full border border-black/15 bg-[#28282a] px-4 text-[#f8f1e4] shadow-[0_4px_14px_rgba(0,0,0,0.16)] transition-[transform,background-color,color] duration-300 active:scale-95 max-[720px]:inline-flex",
          menuOpen && "bg-[#f45517] text-[#17140f]",
        )}
      >
        <span className="font-display text-[22px] uppercase leading-none tracking-[-0.08em]">
          {menuOpen ? "Close" : "Menu"}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            "grid grid-cols-2 gap-[3px] transition-transform duration-300",
            menuOpen && "rotate-45",
          )}
        >
          {[0, 1, 2, 3].map((dot) => (
            <span
              key={dot}
              className={cn(
                "h-[4px] w-[4px] bg-[#f45517] transition-colors duration-300",
                menuOpen && "bg-[#17140f]",
              )}
            />
          ))}
        </span>
      </button>
    </header>
  );
}
