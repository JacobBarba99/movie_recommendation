import type { AppProps } from "next/app";
import PublicLayout from "../layout/PublicLayout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}
export default MyApp;
