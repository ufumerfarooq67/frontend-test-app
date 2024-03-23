import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useCallback, useEffect, useRef } from "react";

interface IGoogleMapsProps {
  coordinates: { lat: string; lng: string };
}

// Google Maps Component
export default function GoogleMasps(props: IGoogleMapsProps) {
  const { coordinates } = props;

  // Ref
  const mapRef = useRef();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const onGoogleMapsLoad = useCallback((map: any) => {
    console.log(map, typeof map);
    mapRef.current = map;
  }, []);

  if (!isLoaded) return <div className="mt-4">Google Maps</div>;
  if (loadError) return <div className="mt-4">Google Maps Error</div>;

  return (
    <div className="mt-4">
      <GoogleMap
        mapContainerStyle={{
          height: "500px",
        }}
        center={{
          lat: Number(coordinates?.lat),
          lng: Number(coordinates?.lng),
        }}
        onLoad={onGoogleMapsLoad}
      />
    </div>
  );
}
