import { useState, useEffect } from 'react';

const useVehicleMovement = () => {
  const [vehiclePosition, setVehiclePosition] = useState(null);
  const [path, setPath] = useState([]);

  useEffect(() => {
    // Simulating real-time updates every few seconds
    const interval = setInterval(() => {
      const newPosition = {
        lat: vehiclePosition ? vehiclePosition.lat + 0.0001 : 37.7749,
        lng: vehiclePosition ? vehiclePosition.lng + 0.0001 : -122.4194,
      };
      setVehiclePosition(newPosition);
      setPath((prevPath) => [...prevPath, newPosition]);
    }, 3000);

    return () => clearInterval(interval);
  }, [vehiclePosition]);

  return { vehiclePosition, path };
};

export default useVehicleMovement;
