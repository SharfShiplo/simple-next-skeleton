import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import notfound from '@/assets/placeholders/not-found.jpg';

export default function NotFoundPage() {

  return (
    <div className="grid min-h-screen place-items-center p-4 sm:p-8">
      <div className="text-center">
        <p className="2xl: mb-4 text-sm uppercase tracking-widest text-body-dark sm:mb-5">
        Error code: 404
        </p>
        <h1 className="mb-5 text-2xl font-bold leading-normal text-bolder sm:text-3xl">
        Oops! Looks like this isn't a page
        </h1>
        <div className="mb-11 w-full h-96">
          <Image src={notfound} alt={'Error code: 404'} width={720} height={384} objectFit="contain" />
        </div>
        <Link
          href={Routes.home}
          className="inline-flex items-center text-bolder underline hover:text-body-dark hover:no-underline focus:outline-none sm:text-base"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}