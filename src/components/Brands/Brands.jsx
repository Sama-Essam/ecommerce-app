import React, { useEffect, useState } from "react";
import axios from "axios";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `{{BaseUrl}}/api/v1/brands`;

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get(url);
        setBrands(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="brands-container">
      <h1>All Brands</h1>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand.logo} alt={brand.name} />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
