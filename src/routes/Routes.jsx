import React, { useContext } from 'react';
import DashboardUtama from '../view/DashboardUtama';
import Visualisasi from '../view/Visualisasi';
import { AppContext } from '../context/AppContext';

export default function Routes() {
  const { route } = useContext(AppContext);

  const renderPage = () => {
    switch (route) {
      case 'dashboard':
        return <DashboardUtama />;
      case 'visualisasi':
        return <Visualisasi />;
    }
  };
  return <>{renderPage()}</>;
}
