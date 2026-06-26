import { useEffect, useState } from 'react';
import { productPages } from './data/site-data';
import DialerPage from './pages/DialerPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { getRouteFromHash, routes } from './utils/navigation';
import './App.css';

function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (route === routes.dialer) {
    return <DialerPage />;
  }

  if (productPages[route]) {
    return <ProductPage product={productPages[route]} />;
  }

  return <HomePage />;
}

export default App;
