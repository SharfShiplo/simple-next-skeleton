import DemoCard from '@/components/cards/demo-card';
import SectionBlock from '@/components/ui/section-block';

interface Props {
  title: string;
}

export default function SideBarDemoSection({ title }: Props) {
  return (
    <SectionBlock title={title}>
      <div className="relative w-full">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-2">
          <DemoCard view="SIDEBAR_DEMO_MAIN" title="Sidebar Left" />
          <DemoCard view="SIDEBAR_DEMO_OPTIONAL" title="Sidebar Right" />
          <DemoCard view="SIDEBAR_DEMO_MAIN" title="Sidebar Left"/>
          <DemoCard view="SIDEBAR_DEMO_OPTIONAL" title="Sidebar Right" />
        </div>
      </div>
    </SectionBlock>
  );
}
