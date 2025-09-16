 'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from 'lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  exact?: boolean; // optional: match exact path or just startsWith
  openInNewTab?: boolean;
}

export function NavLink({ 
    href, 
    children, 
    className, 
    openInNewTab = false 
  }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Button
      asChild
      variant="link"
      className={cn(
        'relative px-2 py-1', // base styles
        isActive && 'border-b-2 border-black',
        className // allow caller to override/extend
      )}
    >
      <Link href={href} target={openInNewTab ? "_blank" : null} className="flex flex-row items-center gap-2">
        {children}
      </Link>
    </Button>
  );
}
