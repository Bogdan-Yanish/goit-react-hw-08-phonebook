import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LoaderSpinner } from 'components/Loader/loader';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<LoaderSpinner/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};