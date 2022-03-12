import {useEffect} from 'react';
//import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

  return <Component {...pageProps} />
}

export default MyApp
