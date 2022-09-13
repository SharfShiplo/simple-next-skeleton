import { getGeneralLayout } from '@/components/layouts/_general';
import SectionBlock from '@/components/ui/section-block';
import type { NextPage } from 'next';


const Post: NextPage = () => {
  return (
    <SectionBlock>
        <h1 className="mt-3 text-center">Post Page</h1>
    </SectionBlock>
  );
};

Post.getLayout = getGeneralLayout

export default Post;