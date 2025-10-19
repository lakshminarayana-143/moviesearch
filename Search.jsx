import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNhY2RiOGNmYWQ1ZmZiMmNiNWRlZDU2YzcxMDY5MCIsIm5iZiI6MTc1Nzc0OTEyMS40ODQsInN1YiI6IjY4YzUxZjgxZDEwMmYyZTBhMzJiMzY5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LIm-asdgmgw6guO9-cUTxjHK5Na-E1YaGkQWzaI4ECI',
    },
  };


  useEffect(() => {
    async function fetchmovie() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=34392903a16c3cda41e744f6bef3d5db&language=en-US&page=1`, options
        );
        setData(res.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchmovie();
  }, []);



  async function handleButton() {
    if (!search.trim()) return;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
        options
      );
      setData(res.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {/* 🔹 Navbar */}
      <div
        style={{
          backgroundColor: "#222",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>
          MOVIES APPLICATION
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search movies..."
            value={search}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
              outline: "none",
              width: "220px",
            }}
          />
          <button
            onClick={handleButton}
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#ff4757",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* 🔹 Movies Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {data.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </div>
    </>
  );
}
