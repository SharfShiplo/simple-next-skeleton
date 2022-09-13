import type { NextPageWithLayout } from '@/types';
import type { InferGetStaticPropsType } from 'next';
import HomePage from '@/components/layouts/home-page';
import HomeLayout from '@/components/layouts/_home';
import {getStaticProps } from '@/rest/home-page.ssr';
import { API_ENDPOINTS } from '@/rest/client/api-endpoints';

export { getStaticProps };
const Home: NextPageWithLayout<
InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  return (
    <HomePage demoData={"Demo string"}/>
  );
};

Home.getLayout = function getLayout(page) {
  const settingsState = page.props.dehydratedState?.queries.find((item: any) => item.queryKey[0] === API_ENDPOINTS.SETTINGS);
  const settings = settingsState?.state?.data?.options ?? null
  return <HomeLayout settingsData={settings}>{page}</HomeLayout>;
};

export default Home;