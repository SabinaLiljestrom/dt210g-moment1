import React, { useState } from "react";

// Definierar en interface för props, så att komponenten vet vilken data den ska ta emot.
interface ItemProps {
  name: string; // Namnet på resmålet
  year: number; // Året då resan gjordes eller planeras
  isFavorite: boolean; // Om det är en favoritdestination eller inte
}

// Funktionell React-komponent som tar emot ett resmål och visar det i ett kort.
const Item: React.FC<ItemProps> = ({ name, year, isFavorite }) => {
  // State för att hålla koll på om resmålet är favorit eller inte.
  const [favorite, setFavorite] = useState(isFavorite);

  // Hämtar aktuellt år för att kunna avgöra om resan är framtida eller redan gjord.
  const currentYear = new Date().getFullYear();
  const visitStatus = year > currentYear ? "🌍 Ska besökas:" : "✈️ Besöktes:";

  // Enkel inline-CSS för knappen
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#007bff", // Samma färg oavsett favoritstatus
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="item">
      <h2>{name}</h2>
      <p>{visitStatus} {year}</p>
      <p>{favorite ? "⭐ Favoritdestination" : "🏙️ Vanligt resmål"}</p>

      {/* Knapp för att lägga till eller ta bort favoriter */}
      <button style={buttonStyle} onClick={() => setFavorite(!favorite)}>
        {favorite ? "Ta bort från favoriter" : "Lägg till som favorit"}
      </button>
    </div>
  );
};

// Exporterar komponenten så att den kan användas i andra filer.
export default Item;
