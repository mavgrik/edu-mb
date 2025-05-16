import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('bg-card m-4 animate-pulse rounded-lg', className)} {...props} />;
}

export { Skeleton };
