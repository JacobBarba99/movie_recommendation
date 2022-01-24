import { ReactNode } from "react";
import type { AppPropsWithLayout } from "../src/types/page";
import { Provider } from "react-redux";

import Layout from "../src/Layout";
import generateStore from "../src/redux/store";

import "../styles/globals.scss";

const store = generateStore();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const LayoutApp = Component.layout ?? Layout;

  return (
    <Provider store={store}>
      <LayoutApp>{getLayout(<Component {...pageProps} />)}</LayoutApp>
    </Provider>
  );
}

export default MyApp;
