import { useEffect } from 'react';
import '../src/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const style = document.getElementById('server-side-styles');
      if (style) style.remove();
    }
  }, []);

  return <Component {...pageProps} />;
}
