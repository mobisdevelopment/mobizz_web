"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface ViewLocationMapProps {
  latitude: number;
  longitude: number;
  address: string;
}

const mapContainerStyle = {
  width: "100%",
  height: "384px",
};

export default function ViewLocationMap({
  latitude,
  longitude,
  address,
}: ViewLocationMapProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) {
    return (
      <div className="w-full h-96 rounded-lg border border-gray-300 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Location on Map
      </label>
      <div className="rounded-lg border border-gray-300 overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat: latitude, lng: longitude }}
          zoom={15}
          options={{
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={{ lat: latitude, lng: longitude }}
            title={address}
          />
        </GoogleMap>
      </div>
      <p className="text-sm text-gray-500">
        Coordinates: {latitude.toFixed(4)}, {longitude.toFixed(4)}
      </p>
    </div>
  );
}
