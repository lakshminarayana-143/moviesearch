import React from 'react';

export default function MovieCard({ movie }) {
  console.log(movie);
  const { title, release_date, poster_path, backdrop_path, overview } = movie;
  const imagePath = poster_path || backdrop_path;

  return (
    <div
      style={{
        backgroundColor: "#000",                // 🔹 black background
        color: "#fff",                          // 🔹 white text
        borderRadius: "14px",
        padding: "16px",
        maxWidth: "300px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
        margin: "12px auto",
        fontFamily: "Arial, sans-serif",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-20px)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.75)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.6)";
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#fff", // 🔹 keep white
        }}
      >
        {title}
      </p>

      <img
        src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${imagePath}`}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      />

      <p
        style={{
          fontSize: "14px",
          color: "#bbb", // 🔹 light gray for metadata
          marginBottom: "8px",
        }}
      >
        <strong>Release Date:</strong> {release_date || "N/A"}
      </p>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.5",
          color: "#ddd", // 🔹 softer white for description
        }}
      >
        {overview
          ? overview.length > 150
            ? overview.slice(0, 147) + "..."
            : overview
          : "No description available."}
      </p>
    </div>
  );
}
