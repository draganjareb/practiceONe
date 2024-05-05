import { pokemons } from "../Pokemon/components/pokemon";

import axios from "axios";
import { useEffect, useState } from "react";
import "./pokemon.style.css";

const Pokemon = () => {
  const { data, setData } = useState([]);
  //ovo će mi možda trebati na dugme
  const morePokemon = async () => {
    try {
      const res = await axios.get({ pokemons });
      setPost(res.data);
    } catch (err) {
      console.log(err, `ERR`);
    }
  };

  useEffect(() => {
    morePokemon();
  });

  return (
    <div className="pokemonHolder">
      <div className="pokemonCard">
        {pokemons.map((item) => (
          <div key={item.id} className="pokeCard">
            <img
              src={item.images}
              alt={item.namePokemon}
              className="pokemonImages"
            />
            <h3>{item.id}</h3>
            <h2>{item.namePokemon}</h2>
            <span style={{ backgroundColor: item.color }}>{item.type}</span>
          </div>
        ))}
      </div>
      <button onClick={() => morePokemon()} className="moreButton">
        Read more pokemon
      </button>
    </div>
  );
};

export default Pokemon;
