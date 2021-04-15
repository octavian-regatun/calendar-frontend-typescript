import { BACKEND_URI } from '@/lib/constants';
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
        `${BACKEND_URI}/location/${ip}`,
      );

      map.setView(
        new LatLng(parseFloat(location.lat), parseFloat(location.lon)),
      );
    })();
  });

  return null;
};

export default Locate;
