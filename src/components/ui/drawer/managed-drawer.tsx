import { drawerAtom } from '@/store/drawer-atom';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Drawer from './drawer';

const SidebarDemoMain = dynamic(
  () => import('@/components/layouts/menu/sidebars/sidebar-demo-main')
);
const SidebarDemoOptional = dynamic(
  () => import('@/components/layouts/menu/sidebars/sidebar-demo-optional')
);

export default function ManagedDrawer() {
  const [{ display, view, data }, setDrawerState] = useAtom(drawerAtom);
  return (
    <Drawer
      open={display}
      onClose={() => setDrawerState({ display: false, view: '' })}
      variant={
        [
          'SIDEBAR_DEMO_MAIN',
        ].includes(view)
          ? 'left'
          : 'right'
      }
    >
      {view === 'SIDEBAR_DEMO_MAIN' && <SidebarDemoMain />}
      {view === 'SIDEBAR_DEMO_OPTIONAL' && <SidebarDemoOptional />}
    </Drawer>
  );
}
