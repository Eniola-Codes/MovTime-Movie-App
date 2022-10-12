import "../styles/global.css";
import NavBar from "../Components/Bars/NavBar";
import SideBar from "../Components/Bars/SideBar";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="container_content">
        <SideBar />
        <div className="container_main">
          <NavBar />
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
