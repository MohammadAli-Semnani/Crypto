import React, { useState, useEffect } from "react";

//API
import { getCoin } from "../Services/api";
//components
import Coin from "./Coin";
import Loader from "./Loader";
//css
import styles from "./Landing.module.css"

const Landing = () => {
  const [coins, setCoines] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoines(data);
    };

    fetchAPI();
  }, []);
    
    const searchHandler = (event) => {
        setSearch(event.target.value)
    }

    const searchedCoin = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          name="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={searchHandler}
        />
      </div>

      <div className={styles.coinContainer}>
        {coins.length ? (
          searchedCoin.map((coin) => (
            <Coin
              key={coin.id}
              symbol={coin.symbol}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Landing;
