import { drawerAtom } from '@/store/drawer-atom';
import { useAtom } from 'jotai';

type DemoCardProps = {
  view: string;
  title: string;
};

const DemoCard: React.FC<DemoCardProps> = ({ view, title }) => {
    const [_, setDrawerView] = useAtom(drawerAtom);
  
  
    function handleSidebar() {
      setDrawerView({ display: true, view });
    }

  return (
    <article
      className={'h-full transform overflow-hidden rounded bg-light shadow-downfall-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-downfall-lg'}
      onClick={handleSidebar}
      role="button"
    >
      <header className="relative flex h-48 w-auto items-center justify-center sm:h-52 bg-green-50">
        <h4 className="text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent">{title}</h4>
      </header>
        
    </article>
  );
};

export default DemoCard;
