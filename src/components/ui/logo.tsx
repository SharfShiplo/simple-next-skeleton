import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder } from '@/lib/placeholders';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  
  return (
    <Link href="/" className={cn('inline-flex', className)} {...props}
     aria-label="Your brand logo">
      <span className="relative h-10 w-32 overflow-hidden md:w-40">
        <Image
          src={logoPlaceholder}
          alt={'Your brand Logo'}
          layout="fill"
          objectFit="contain"
          loading="eager"
          priority={true}
          // as={logo?.original ?? logoPlaceholder}
        />
      </span>
    </Link>
  );
};

export default Logo;
