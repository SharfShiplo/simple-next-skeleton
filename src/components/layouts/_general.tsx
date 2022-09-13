import Footer from './footer';
import Header from './header';

export default function GeneralLayout({
  children,
  withFooter,
}: React.PropsWithChildren<{ withFooter?: boolean }>) {
  // console.log(category)
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      <Header />
      {children}
      {withFooter && (<Footer />)}
    </div>
  );
}

export const getGeneralLayout = (page: React.ReactElement) => (
  <GeneralLayout withFooter={page?.props?.withFooter ?? false}>
    {page}
  </GeneralLayout>
);
