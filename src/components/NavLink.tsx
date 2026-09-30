'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, to, href, children, ...props }, ref) => {
    const pathname = usePathname();
    const linkHref = to || href || '/';
    const isActive = pathname === linkHref || (linkHref !== '/' && pathname.startsWith(linkHref));

    return (
      <Link
        ref={ref}
        href={linkHref}
        className={cn(className, isActive && activeClassName)}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
