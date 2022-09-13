import GeneralLayout from '@/components/layouts/_general';
import SectionBlock from '@/components/ui/section-block';
import type { NextPage } from 'next';


 const Help: NextPage = () => {
  return (
    <SectionBlock>
        <h1 className="mt-3 text-center">Help Page</h1>
    </SectionBlock>
  );
};

const GetLayout = (page: React.ReactElement) => {
  
  // We can find our data returned by getStaticProps/getServerSideProps
  // with pageProps and send them to our layout if needed

  return (
    <GeneralLayout withFooter>
        <div className="mt-2 w-full bg-orange-50">
          <div className="mx-auto min-h-screen py-10 px-5">
            {page}
          </div>
        </div>
    </GeneralLayout>
  );
};

Help.getLayout = GetLayout;

export default Help;