import cn from 'classnames';
import Link from '@/components/ui/link';

type SectionProps = {
  className?: any;
  title?: string;
  href?: string;
  children: React.ReactElement,
};

/**
 * UI component for a section block
 * @param {string} title - The title of the section
 * @param {string} description - The description of the section
 * @param {string} href - The href of the external page for this section
 */

const SectionBlock: React.FC<SectionProps> = ({
  className,
  title,
  href,
  children,
}) => {
  return (
    <div
      className={cn(
        'w-full flex pb-[32px] xl:pb-[48px] 3xl:pb-[60px] px-7 xl:px-16 flex-col',
        className
      )}
    >
      {title && (
        <div className="flex items-center justify-between mb-6 ">
          {title && (
            <h3 className="text-xl md:text-2xl lg:text-2xl 3xl:text-3xl font-medium">
              {title}
            </h3>
          )}
          {href && (
            <Link
              href={href}
              className="text-base font-semibold justify-end transition-colors hover:text-red-500"
            >
              See all
            </Link>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionBlock;
