"use client";

import { useState } from "react";
import background from "/public/background.jpg";

export default function FilterSection() {
  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    const params = new URLSearchParams();
    if (city) params.append("city", city);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    window.location.search = params.toString();
  };

  return (
    <div
      className="p-6 bg-gray-100 flex justify-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Filter Properties
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 border rounded-xl w-full"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-3 border rounded-xl w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-3 border rounded-xl w-full"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleFilter}
            className="bg-blue-500 text-white p-3 rounded-xl w-full md:w-auto px-6 shadow-md hover:bg-blue-600 transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
