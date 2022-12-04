import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../lib/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value={{user: {}}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
