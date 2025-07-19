import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('group flex items-center', className)}>
      <svg
        className={cn('h-8 w-auto text-primary', className)}
        width="150"
        height="40"
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="skillsett.in logo"
      >
        <text
          x="10"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="currentColor"
        >
          skillsett
          <tspan fill="hsl(var(--accent))">.in</tspan>
        </text>
      </svg>
    </Link>
  );
}
