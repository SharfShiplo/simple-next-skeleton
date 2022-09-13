import { Image } from '@/components/ui/image';
import { bannerPlaceholder } from '@/lib/placeholders';
type Banner = {
  imageUrl: string;
  title?: string;
  href?: string;
};
interface BannerProps {
  banner: Banner | null;
}
const HomeBanner: React.FC<BannerProps> = ({ banner }) => {
  return (
    <div className={'relative block'}>
      <div
        className={'relative h-screen max-h-[320px] w-full md:max-h-[480px]'}
      >
        <Image
          className="h-full w-full"
          src={banner?.imageUrl ?? bannerPlaceholder}
          alt={banner?.title ?? ''}
          layout="fill"
          objectFit="cover"
          priority={true}
          as={banner?.imageUrl ?? bannerPlaceholder}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
