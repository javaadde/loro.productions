(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ----------------------------------------------------------
     Stats count-up (easeOutCubic, staggered, once via observer)
     ---------------------------------------------------------- */
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const statValues = Array.from(document.querySelectorAll(".stat-value"));

  const renderValue = (el, value) => {
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    el.textContent = value.toFixed(decimals) + suffix;
  };

  const animateCount = (el, index) => {
    const target = parseFloat(el.dataset.target || "0");

    if (prefersReducedMotion || !Number.isFinite(target)) {
      renderValue(el, target);
      return;
    }

    const duration = 1500 + index * 80;
    const startDelay = 480 + index * 90;

    window.setTimeout(() => {
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        renderValue(el, target * easeOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          renderValue(el, target);
        }
      };

      requestAnimationFrame(tick);
    }, startDelay);
  };

  if (statValues.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          animateCount(el, statValues.indexOf(el));
          obs.unobserve(el);
        });
      },
      { threshold: 0.25 }
    );

    statValues.forEach((el) => observer.observe(el));
  }

  /* ----------------------------------------------------------
     Scroll reveal for below-fold sections ([data-reveal])
     ---------------------------------------------------------- */
  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));

  if (revealEls.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-revealed"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.18 }
      );

      revealEls.forEach((el) => revealObserver.observe(el));
    }
  }

  /* ----------------------------------------------------------
     Mobile menu
     ---------------------------------------------------------- */
  const burger = document.getElementById("burger");
  const overlay = document.getElementById("overlay");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burger && overlay && mobileMenu) {
    const isOpen = () => document.body.classList.contains("menu-open");

    const setMenu = (open) => {
      document.body.classList.toggle("menu-open", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      overlay.hidden = !open;
      mobileMenu.hidden = !open;
    };

    burger.addEventListener("click", () => setMenu(!isOpen()));
    overlay.addEventListener("click", () => setMenu(false));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen()) setMenu(false);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720 && isOpen()) setMenu(false);
    });
  }
})();
