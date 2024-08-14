import React from 'react';
import { Outlet } from 'react-router-dom';
import { useHeaderVisibility } from '../context/HeaderVisibilityContext';
import Header from './Header';

const AppContent = () => {
  const { isHeaderHidden } = useHeaderVisibility();

  return (
    <div>
      {!isHeaderHidden && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppContent;