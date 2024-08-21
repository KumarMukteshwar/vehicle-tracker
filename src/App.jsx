import React from 'react';
import MapComponent from './components/MapComponent';
import useVehicleMovement from './hooks/useVehicleMovement';

const App = () => {
  const { vehiclePosition, path } = useVehicleMovement();

  return (
    <div>
      <h1>Vehicle Tracker</h1>
      <MapComponent vehiclePosition={vehiclePosition} path={path} />
    </div>
  );
};

export default App;
