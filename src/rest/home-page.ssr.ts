import type {
    HomePageProps,
  } from '@/types';
  import type {GetStaticProps } from 'next';
  import { QueryClient } from 'react-query';
  import { dehydrate } from 'react-query/hydration';
  import client from './client';
  import { API_ENDPOINTS } from './client/api-endpoints';
  
  type ParsedQueryParams = {
    pages: string[];
  };
  
  
  export const getStaticProps: GetStaticProps<
    HomePageProps,
    ParsedQueryParams
  > = async () => {
    const queryClient = new QueryClient();
    // uncomment the following line when you have filled the '.env' with proper environment variable
    // also check the "API_ENDPOINTS" if you have a different api endpoint for settings
    // await queryClient.prefetchQuery(
    //   [API_ENDPOINTS.SETTINGS],
    //   client.settings.all
    // );
    
  
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 120,
    };
  };

  