import React, { useContext } from 'react';
import DashboardUtama from '../view/DashboardUtama';
import { AppContext } from '../context/AppContext';
import MapKebun from '../view/MapKebun';

export default function Routes() {
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case 'dashboard':
        return <DashboardUtama />;
      case 'map':
        return <MapKebun />;
    }
  };
  return <>{renderPage()}</>;
}
