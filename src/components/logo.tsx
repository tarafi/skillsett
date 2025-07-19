import Link from 'next/link';
import { Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2 text-2xl font-bold font-headline tracking-tight text-primary', className)}>
      <Layers className="h-6 w-6 transition-transform group-hover:rotate-12" />
      <span>SkillSett.in</span>
    </Link>
  );
}
