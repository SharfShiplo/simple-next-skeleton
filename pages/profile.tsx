import HomeLayout from '@/components/layouts/_home';
import SectionBlock from '@/components/ui/section-block';
import type { NextPage } from 'next';


const Profile: NextPage = () => {
  return (
    <SectionBlock>
        <h1 className="mt-3 text-center">Profile Page</h1>
    </SectionBlock>
  );
};
Profile.authenticationRequired = true;

Profile.getLayout = function getLayout(page:React.ReactElement) {
  return <HomeLayout settingsData={null}>{page}</HomeLayout>;
};

export default Profile;