import React, { useState, useEffect } from "react";
import cardJsonData from "../CardsData/posts.json";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchinf, setsearchinf] = useState("");
  const cardsPerPage = 9;

  localStorage.setItem("cardData", JSON.stringify(cardJsonData));

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cardData"));
    if (storedData) {
      setCards(storedData);
    }
  }, []);

  const startIndex = currentPage * cardsPerPage;

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchinf.toLowerCase()) ||
      card.body.toLowerCase().includes(searchinf.toLowerCase()) ||
      card.author.name.toLowerCase().includes(searchinf.toLowerCase())
  );

  const displayCards = filteredCards.slice(startIndex, startIndex + cardsPerPage);

  const nextButton = () => {
    if (startIndex + cardsPerPage < cards.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevButton = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="homepage-container">
      <h1>Home page</h1>
      <div className="home-header">
        <button onClick={() => navigate('/post')} className="new-card-button" >Post new card</button>
        <div>
           Serach : <input
            type="search"
            name="Search"
            value={searchinf}
            placeholder="search here"
            className="search"
            onChange={(e) => setsearchinf(e.target.value)} 
          />
        </div>
      </div>
      <div className="card-row">
        {displayCards.map((card) => (
          <div key={card.id} className="card">
            <h3>Title :{card.title}</h3>
            <p>Description :{card.body}</p>
            <p>Tags : {card.tags}</p>
            <p>Author : {card.author.name}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={prevButton} className="bottom-button">Previous</button>
        <button onClick={nextButton} className="bottom-button">Next</button>
      </div>
    </div>
  );
};

export default Home;
