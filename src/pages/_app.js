// pages/_app.js
import '../app/globals.css'; // Example: Import global styles
import Layout from '../app/layout'; // Use absolute import
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);

// ... rest of your _app.js file


function MyApp({ Component, pageProps }) {
  // You can include layout components, providers, or other setup here
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
