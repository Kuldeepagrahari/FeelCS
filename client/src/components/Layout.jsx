import Header from './Header';
import Footer from './Footer';

// This Layout component provides a consistent structure (Header and Footer)
// for all the pages in the application. The <Outlet /> component renders
// the specific page component that matches the current route. [1, 2, 5]
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;