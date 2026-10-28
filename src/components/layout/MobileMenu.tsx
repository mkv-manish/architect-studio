"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import Link from "next/link";
import NavLinks from "@/components/layout/NavLinks";
import { siteConfig } from "@/lib/constants";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open || !dialog.current) return;
    const modal = dialog.current;
    const triggerButton = trigger.current;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    closeButton.current?.focus();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onResize);
    return () => {
      desktop.removeEventListener("change", onResize);
      modal.close();
      document.body.style.overflow = previousOverflow;
      triggerButton?.focus();
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <div className="shrink-0 xl:hidden">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="mobile-navigation-dialog"
        aria-label="Open navigation"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white/85 transition hover:border-[#dfc39c]/40 hover:bg-white/[0.07]"
      >
        <Menu size={21} aria-hidden="true" />
      </button>
      {open &&
        createPortal(
          <dialog
            ref={dialog}
            id="mobile-navigation-dialog"
            aria-labelledby="mobile-menu-title"
            onCancel={(event) => {
              event.preventDefault();
              close();
            }}
            className="mobile-menu-dialog"
          >
            <button
              type="button"
              tabIndex={-1}
              onClick={close}
              aria-label="Dismiss navigation backdrop"
              className="absolute inset-0 h-full w-full bg-black/55 backdrop-blur-[3px]"
            />
            <div className="mobile-sidebar">
              <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 px-5 py-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#dfc39c]/25 bg-[#dfc39c]/5 text-[#dfc39c]">
                    <Building2 size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p
                      id="mobile-menu-title"
                      className="text-sm font-semibold tracking-wide"
                    >
                      BTC Design Studio
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.19em] text-white/45">
                      Architecture & planning
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  ref={closeButton}
                  aria-label="Close navigation"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/10"
                >
                  <X size={19} aria-hidden="true" />
                </button>
              </header>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5">
                <p className="mb-3 px-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Explore the studio
                </p>
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1"
                >
                  <NavLinks variant="sidebar" onNavigate={close} />
                </nav>
              </div>
              <footer className="sidebar-footer shrink-0 border-t border-white/10 bg-white/[0.015] px-5 pt-5">
                <Link
                  href="/consultation"
                  onClick={close}
                  className="flex min-h-12 items-center justify-between gap-3 rounded-xl bg-[#dfc39c] px-4 py-3 text-xs font-semibold text-[#08131c] transition hover:bg-[#eddbc2]"
                >
                  <CalendarDays size={17} aria-hidden="true" />
                  <span className="flex-1">Book a consultation</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <div className="mt-4 flex items-center justify-between gap-3 text-[10px] text-white/50">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="inline-flex min-h-10 items-center gap-2 hover:text-white"
                  >
                    <Phone size={13} aria-hidden="true" />
                    {siteConfig.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} aria-hidden="true" />
                    Giridih, JH
                  </span>
                </div>
              </footer>
            </div>
          </dialog>,
          document.body,
        )}
    </div>
  );
}
