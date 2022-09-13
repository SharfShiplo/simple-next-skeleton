import { useRouter } from 'next/router';
import { BackArrowRound } from '@/components/icons/back-arrow-round';
import LoginView from '@/components/auth/login-form';
import { useUser } from '@/rest/user';

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter();
  const { me, isAuthorized } = useUser();

  const isUser = !!me;
  if (!isUser && !isAuthorized) {
    return (
      <div className="relative flex justify-center w-full min-h-screen py-5 md:py-8">
        <button
          className="absolute flex items-center justify-center w-8 h-8 text-gray-200 transition-colors md:w-16 md:h-16 top-5 md:top-1/2 left-5 md:left-10 md:-mt-8 md:text-gray-300 hover:text-gray-400"
          onClick={router.back}
        >
          <BackArrowRound  />
        </button>
        <div className="flex flex-col my-auto">
          <LoginView />
        </div>
      </div>
    );
  }
  if (isUser && isAuthorized) {
    return <>{children}</>;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  // add your custom loader here, Please note, This loader will be applied as global loader
  return <p >Loading......</p>;
};

export default PrivateRoute;
