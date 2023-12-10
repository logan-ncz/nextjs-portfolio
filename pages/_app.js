import Footer from "../components/Footer";
import Header from "../components/Header";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";


function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (

    <Provider store={store}>
      <div id="root" className="background">
        <Header />
          <Component {...props.pageProps} />
        <Footer />
      </div>
    </Provider>

  );
}

export default MyApp;