import '../styles/globals.css';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import store from '../store';
import { WarningPage } from '../components';

const MyApp = ({ Component, pageProps }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      {width <= 600 ? getLayout(<Component {...pageProps} />) : <WarningPage />}
    </Provider>
  );
};

export default MyApp;
