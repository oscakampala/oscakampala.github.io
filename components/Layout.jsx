import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main >
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
