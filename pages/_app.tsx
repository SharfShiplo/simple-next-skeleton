import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@/assets/css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ManagedDrawer from '@/components/ui/drawer/managed-drawer';
import DefaultSeo from '@/components/seo/default-seo';
import PrivateRoute from '@/lib/private-route';
import SocialLogin from '@/components/auth/social-login';
import { NextPageWithLayout } from '@/types';
import QueryProvider from '@/rest/client/query-provider';
import { ModalProvider } from '@/components/ui/modal/modal.context';
import ManagedModal from '@/components/ui/modal/managed-modal';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;

  return (
    <SessionProvider session={session}>
      <QueryProvider pageProps={pageProps}>
        <ModalProvider>
          <>
            <DefaultSeo />
            {authenticationRequired ? (
              <PrivateRoute>
                {getLayout(<Component {...pageProps} />)}
              </PrivateRoute>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
            <ManagedModal />
            <ManagedDrawer />
            <ToastContainer autoClose={2000} theme="colored" />
            <SocialLogin />
          </>
        </ModalProvider>
      </QueryProvider>
    </SessionProvider>
  );
}
export default CustomApp;
