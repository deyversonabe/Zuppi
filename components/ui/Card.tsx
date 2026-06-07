import { cn } from '@/lib/ui';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
}

export function Card({ className = '', children, hover = true }: CardProps) {
  return (
    <div className={cn('glass rounded-[1.75rem] p-5', hover && 'card-hover', className)}>
      {children}
    </div>
  );
}
