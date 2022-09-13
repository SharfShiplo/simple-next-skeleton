import Logo from '@/components/ui/logo';
import cn from 'classnames';
import StaticMenu from './menu/static-menu';
import { useAtom } from 'jotai';
import { authorizationAtom } from '@/store/authorization-atom';
import LoginButton from './menu/login-button';

const Header = (props) => {
  const [isAuthorize] = useAtom(authorizationAtom);
  return (
    <header className={'h-14 md:h-16 lg:h-22'}>
      <div
        className={cn(
          'fixed z-50 flex h-14 w-full transform-gpu items-center justify-between border-b border-border-200 bg-light px-7 py-5 shadow-sm transition-transform duration-300 md:h-16 lg:h-22 xl:px-16'
        )}
      >
        <div className="flex w-full items-center lg:w-auto">
          <Logo className="mx-auto lg:mx-0" />
        </div>
        <ul className="hidden shrink-0 items-center space-x-10 lg:flex">
          <StaticMenu />
          <div className="flex items-center space-x-4">
            <li>
              {isAuthorize ? (
                <span className="h-9 h-10 px-3 py-0 text-sm font-semibold">
                  Welcome
                </span> // we can provide an authorize menu here
              ) : (
                <LoginButton />
              )}
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
