import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('group flex items-center', className)}>
      <Image src="/logo.png" alt="skillsett.in logo" width={150} height={40} />
    </Link>
  );
}
