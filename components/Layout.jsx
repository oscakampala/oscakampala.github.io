import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <main className='grid'>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
