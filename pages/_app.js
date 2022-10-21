import "../styles/global.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { SSRProvider } from "react-aria";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
    <Provider store={store}>
          <Component {...pageProps} />
    </Provider>
    </SSRProvider>
  );
}

export default MyApp;
