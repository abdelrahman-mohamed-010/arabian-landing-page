"use client";
import { Clock3 } from "lucide-react";
import React, { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Location = ({ translations }) => {
  const mapContainer = useRef(null);

  const schedule = {
    date: "15 December",
    time: "9 AM to 3 AM",
  };

  useEffect(() => {
    if (
      mapContainer.current &&
      !mapContainer.current.classList.contains("leaflet-container")
    ) {
      // New York coordinates
      const map = L.map(mapContainer.current, {
        zoomControl: false, // Remove zoom controls
      }).setView([40.7128, -74.006], 10);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Add a marker
      const marker = L.marker([40.7128, -74.006], {
        icon: L.divIcon({
          className: "custom-marker",
          html: '<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%;"></div>',
        }),
      }).addTo(map);

      // Add city name to bottom right
      L.Control.CityName = L.Control.extend({
        options: {
          position: "bottomright",
        },
        onAdd: function (map) {
          const container = L.DomUtil.create("div", "city-name-container");
          container.innerHTML = "New York City";
          container.style.backgroundColor = "rgba(0,0,0,0.7)";
          container.style.color = "white";
          container.style.padding = "5px 10px";
          container.style.borderRadius = "5px";
          return container;
        },
      });

      L.control.cityName = function (opts) {
        return new L.Control.CityName(opts);
      };

      L.control.cityName({ position: "topleft" }).addTo(map);
    }
  }, []);

  return (
    <section className="text-white px-4 md:px-28 2xl:px-48 pt-4">
      <p className=" text-justify max-sm:text-sm">
        {translations.address.description}
      </p>
      <div className="flex flex-col lg:flex-row gap-7 mt-6 md:mt-12 max-lg:items-center max-md:gap-6">
        <div className="w-[80%] max-md:mt-4 md:w-[555px] h-auto md:h-[194px] z-20 rounded-2xl overflow-hidden">
          <div
            ref={mapContainer}
            className="w-full min-h-[200px] md:h-[194px]"
            style={{ width: "100%" }}
          />
        </div>
        <div
          dir="ltr"
          className="w-[80%] md:w-[279px] h-[165px] md:h-[194px] z-20 p-5 pl-7 bg-[#242424] rounded-2xl max-sm:w-[82.5%]"
        >
          <Clock3 className="w-12 h-12 mb-6 max-sm:w-8 max-sm:h-8" />
          <span className="block text-xl mb-1 max-sm:text-base">
            {schedule.date} -{" "}
          </span>
          <span className="block text-xl max-sm:text-base">
            {schedule.time}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Location;
