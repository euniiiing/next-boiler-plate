import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import MainLayout from '@/components/layouts/MainLayout';

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </QueryClientProvider>
    );
}

export default MyApp;
