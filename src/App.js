import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  action: [
    {
      name: "Black Panther",
      year: "2018",
      rate: "96%",
      desc:
        "After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his allies and release the full power of Black Panther to defeat his foes and secure the safety of his people."
    },
    {
      name: "Avengers:Endgame",
      year: "2019",
      rate: "94%",
      desc:
        "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
    },
    {
      name: "Baby Driver",
      year: "2017",
      rate: "92%",
      desc:
        "Talented getaway driver Baby (Ansel Elgort) relies on the beat of his personal soundtrack to be the best in the game. After meeting the woman (Lily James) of his dreams, he sees a chance to ditch his shady lifestyle and make a clean break. Coerced into working for a crime boss (Kevin Spacey), Baby must face the music as a doomed heist threatens his life, love and freedom"
    }
  ],

  SciFiFantasy: [
    {
      name: "Jurassic World",
      year: "2015",
      rate: "16+",
      desc:
        "The owners of a dinosaur theme park try to attract tourists with a thrilling new exhibit, but a deadly giant breaks loose and terrorizes the island."
    },
    {
      name: "Interstellar",
      year: "2014",
      rate: "90%",
      desc:
        "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet."
    },
    {
      name: "Jumanji: Welcome to the Jungle",
      year: "2017",
      rate: "93%",
      desc:
        "Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars."
    }
  ],
  horror: [
    {
      name: "Alive",
      year: "2020",
      rate: "97%",
      desc:
        "As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out."
    },
    {
      name: "Army of the dead",
      year: "2021",
      rate: "96%",
      desc:
        "The divisive Zack Snyder returns to the world of zombie action years after his breakthrough with a remake of George A. Romero’s Dawn of the Dead, and the result is a bit of mindless undead fun. Dave Bautista stars as the leader of a ragtag group of former soldiers who are tasked with breaking into the zombie-overrun city of Las Vegas to retrieve millions in a safe under the city."
    },
    {
      name: "Annabelle Comes Home",
      year: "2019",
      rate: "92%",
      desc:
        "A devilish doll presides over a haunted house of horrors, awakening evil spirits in the home of two demonologists and terrorizing their young daughter."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={{ color: "#660066" }}> Movie recommender </h1>
      <p style={{ fontSize: "18px", color: "#e3e3e3" }}>
        {" "}
        Checkout some of my favorite ones.Movies move us like nothing else can,
        whether they’re scary, funny, dramatic, romantic or anywhere in-between.
        So many titles, so much to experience.
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ color: "white" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li key={movie.name} className="card">
              {" "}
              <div style={{ fontSize: "larger", color: "#660066" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", display: "inline-block" }}>
                {" "}
                {movie.year}{" "}
              </div>{" "}
              &nbsp;
              <div
                style={{
                  fontSize: "smaller",
                  display: "inline-block",
                  border: "1px solid white"
                }}
              >
                {" "}
                {movie.rate}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  padding: "4px",
                  fontSize: "15px"
                }}
              >
                {" "}
                {movie.desc}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
