"use client";

import { useState, useCallback } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface LocationPickerProps {
  defaultLat?: number | null;
  defaultLng?: number | null;
  address?: string;
  onLocationChange: (lat: number, lng: number) => void;
}

const mapContainerStyle = {
  width: "100%",
  height: "384px",
};

export default function LocationPicker({
  defaultLat = 44.4268, // Bucharest default
  defaultLng = 26.1025,
  address = "",
  onLocationChange,
}: LocationPickerProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [markerPosition, setMarkerPosition] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const [center, setCenter] = useState({
    lat: defaultLat ?? 44.4268,
    lng: defaultLng ?? 26.1025,
  });

  const [isSearching, setIsSearching] = useState(false);

  const onMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMarkerPosition({ lat, lng });
        onLocationChange(lat, lng);
      }
    },
    [onLocationChange],
  );

  const onMarkerDragEnd = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMarkerPosition({ lat, lng });
        onLocationChange(lat, lng);
      }
    },
    [onLocationChange],
  );

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMarkerPosition(pos);
          setCenter(pos);
          onLocationChange(pos.lat, pos.lng);
        },
        () => {
          alert("Error: The Geolocation service failed.");
        },
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  };

  const searchAddressOnMap = async () => {
    if (!address || address.trim().length === 0) {
      alert("Please enter an address first.");
      return;
    }

    setIsSearching(true);

    try {
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ address: address });

      if (result.results && result.results.length > 0) {
        const location = result.results[0].geometry.location;
        const pos = {
          lat: location.lat(),
          lng: location.lng(),
        };
        setMarkerPosition(pos);
        setCenter(pos);
        onLocationChange(pos.lat, pos.lng);
      } else {
        alert("Address not found. Please try a different address.");
      }
    } catch (error) {
      console.error("Geocoding error:", error);
      alert("Failed to search address. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Location on Map
        </label>
        <div className="w-full h-96 rounded-lg border border-gray-300 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Location on Map
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={searchAddressOnMap}
            disabled={isSearching || !address}
            className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSearching ? "Searching..." : "🔍 Search on Map"}
          </button>
          <button
            type="button"
            onClick={getCurrentLocation}
            className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
          >
            📍 Use My Location
          </button>
        </div>
      </div>
      <div className="rounded-lg border border-gray-300 overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          onClick={onMapClick}
          options={{
            mapTypeControl: true,
            streetViewControl: false,
            fullscreenControl: false,
          }}
        >
          {markerPosition && (
            <Marker
              position={markerPosition}
              draggable={true}
              onDragEnd={onMarkerDragEnd}
            />
          )}
        </GoogleMap>
      </div>
      <p className="text-sm text-gray-500">
        Click on the map or drag the marker to set the establishment location
      </p>
    </div>
  );
}
