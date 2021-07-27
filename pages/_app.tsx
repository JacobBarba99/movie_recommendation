import type { AppProps } from "next/app";
import PublicLayout from "../layout/PublicLayout";
import { Provider } from "react-redux";
import generateStore from "../redux/store";
import "../styles/globals.scss";

const store = generateStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PublicLayout>
        <Component {...pageProps} />
      </PublicLayout>
    </Provider>
  );
}
export default MyApp;
