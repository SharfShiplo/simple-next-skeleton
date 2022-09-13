import SectionBlock from '@/components/ui/section-block';
import Banner from '@/components/banners/home-banner';
import type { HomePageProps } from '@/types';
import SideBarDemoSection from '@/components/ui/demo/drawer-demo-section';

export default function HomePage({demoData}: HomePageProps) {
    

  return (
    <div className="flex flex-1 flex-col bg-white">
      <main className="mt-4 block w-full xl:overflow-hidden">
        <SectionBlock>
          <Banner banner={null} />
        </SectionBlock>
        <SideBarDemoSection title="Sidebar Demo"/>
      </main>
    </div>
  );
}
