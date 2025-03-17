import React from "react";
import Item from "./Item";
import "./ItemList.css"; // Importerar CSS för att styla listan

// En array med resmål, varje objekt innehåller namn, år och om det är en favorit
const travelDestinations = [
  { name: "Sestriere, Italien", year: 2025, isFavorite: false },
  { name: "London, England", year: 2024, isFavorite: false },
  { name: "New York, USA", year: 2022, isFavorite: true },
  { name: "Lissabon, Portugal", year: 2022, isFavorite: false },
  { name: "Baleal, Portugal", year: 2023, isFavorite: true },
  { name: "Albufeira, Spanien", year: 2017, isFavorite: false },
  { name: "Alcudia, Mallorca, Spanien", year: 2022, isFavorite: false },
  { name: "Köpenhamn, Danmark", year: 2023, isFavorite: false },
  { name: "Ponta Delgada, Azorerna, Portugal", year: 2022, isFavorite: true },
  { name: "Tokyo, Japan", year: 2026, isFavorite: false },
  { name: "Taghazout, Marocko", year: 2027, isFavorite: false },
  { name: "Unawatuna, Sri Lanka", year: 2026, isFavorite: false },
];

// Funktionell React-komponent som skapar en lista av resmål
const ItemList: React.FC = () => {
  return (
    <div className="item-list">
      {/* Loopar igenom varje resmål i arrayen och skapar en Item-komponent */}
      {travelDestinations.map((destination, index) => (
        <Item key={index} {...destination} />
      ))}
    </div>
  );
};

// Exporterar komponenten så att den kan användas i andra filer
export default ItemList;
