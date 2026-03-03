'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { label: 'All Asset', href: '/' },
  { label: 'Creator Asset', href: '/assets/creator' },
  { label: 'Ingame Asset', href: '/assets/ingame' },
  { label: 'Avatar', href: '/avatars' },
] as const;

function isActivePath(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname() ?? '';

  return (
    <nav className="flex items-center gap-8" aria-label="Main navigation">
      {MENU_ITEMS.map((item) => {
        const isActive = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium transition-colors
              ${isActive
                ? 'text-foreground'
                : 'text-foreground/70 hover:text-foreground'}`}
          >
            {item.label}
            {isActive && (
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5
                  rounded-full bg-accent"
                aria-hidden
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
