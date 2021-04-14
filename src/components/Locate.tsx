import axios from 'axios';
import { LatLng } from 'leaflet';
import publicIp from 'public-ip';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const Locate = (): null => {
  const map = useMap();

  useEffect(() => {
    (async () => {
      const ip = await publicIp.v4();

      const { data: location } = await axios.get<{ lat: string; lon: string }>(
        `http://ip-api.com/json/${ip}`,
      );

      map.setView(
        new LatLng(parseFloat(location.lat), parseFloat(location.lon)),
      );
    })();
  });

  return null;
};

export default Locate;
