import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login/Login';
import Home from './views/Home/Home';

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/production').then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);

const App = () => {
  const [showDevtools, setShowDevtools] = useState(false);
  const [queryClient] = useState<any>(() => new QueryClient());

  useEffect(() => {
    // @ts-ignore
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
};

export default App;
