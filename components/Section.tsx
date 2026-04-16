import { cn } from '@/lib/cn';

type SectionProps = {
  id: string;
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20', className)}>
      {(title || description) && (
        <header>
          {title ? <h2 className="section-title">{title}</h2> : null}
          {description ? <p className="section-copy">{description}</p> : null}
        </header>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}
