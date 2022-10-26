import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { createBrowserSupabaseClient, Session } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import Layout from '../components/layout';
function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}

export default MyApp
