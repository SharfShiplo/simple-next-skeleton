import Header from './header';
import Footer from './footer';

export default function HomeLayout({
  children,
  settingsData
}: React.PropsWithChildren<{ settingsData: any}>) {

  
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-150">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
