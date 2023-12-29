import type { AppProps } from 'next/app';

import MainLayout from '@/components/layouts/MainLayout';

interface MyAppProps extends AppProps {}

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    );
}

export default MyApp;
