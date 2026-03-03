'use client';

import Link from 'next/link';
import Nav from './Nav';

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="relative flex h-9 w-9 shrink-0" aria-hidden>
        <svg viewBox="0 0 32 32" className="h-9 w-9 text-accent">
          <path
            fill="currentColor"
            d="M16 2l12 7v14l-12 7-12-7V9L16 2z"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center
          text-sm font-bold text-accent-foreground">
          S
        </span>
      </span>
      <span className="text-xl font-semibold tracking-tight text-foreground">
        SAVRSE
      </span>
    </Link>
  );
}

function IconButton({
  href,
  'aria-label': ariaLabel,
  children,
}: {
  href: string;
  'aria-label': string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full
        bg-foreground/10 text-foreground transition-colors
        hover:bg-foreground/20 focus:outline-none focus:ring-2
        focus:ring-accent focus:ring-offset-2 focus:ring-offset-header-bg"
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserProfile() {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-lg py-1.5 pl-1 pr-2
        transition-colors hover:bg-foreground/10 focus:outline-none
        focus:ring-2 focus:ring-accent focus:ring-offset-2
        focus:ring-offset-header-bg"
      aria-label="Open user menu"
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center
          rounded-full bg-[#7dd3fc]/30 text-foreground/90"
        aria-hidden
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
          <path d="M4 12a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6Z" />
        </svg>
      </span>
      <div className="hidden text-left sm:block">
        <p className="text-sm font-medium text-foreground">Isabella</p>
        <p className="text-xs text-foreground/60">Creator Lv 12</p>
      </div>
      <ChevronDownIcon />
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-header-bg">
      <div className="mx-auto flex items-center justify-between gap-6 px-4 py-3">
        <Logo />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Nav />
        </div>
        <div className="flex items-center gap-3">
          <IconButton href="/notifications" aria-label="Notifications">
            <BellIcon />
          </IconButton>
          <IconButton href="/cart" aria-label="Shopping cart">
            <CartIcon />
          </IconButton>
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
