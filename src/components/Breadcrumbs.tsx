import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-muted-foreground ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
        <li className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-foreground transition-colors py-0.5"
            title="Home"
          >
            <FontAwesomeIcon icon={faHouse} className="w-3 h-3 text-muted-foreground/80 hover:text-primary transition-colors" />
            <span className="sr-only">Home</span>
          </Link>
          <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5 text-muted-foreground/40 shrink-0" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              {isLast || !item.href ? (
                <span className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-foreground transition-colors font-medium py-0.5"
                  >
                    {item.name}
                  </Link>
                  <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5 text-muted-foreground/40 shrink-0" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
