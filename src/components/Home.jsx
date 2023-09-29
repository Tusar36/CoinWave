import React from "react";
import Stats from "./Stats.jsx";
import Crypto from "./Crypto.jsx";
import { Link } from "react-router-dom";
import News from "./News.jsx";
export default function Home(props) {
  return (
    <>
      <Stats
        coins={props.data.stats.totalCoins}
        market={props.data.stats.totalMarkets}
        exchange={props.data.stats.totalExchanges}
        cap={props.data.stats.totalMarketCap}
      />
      <hr className="w-[90%] m-auto h-[3px] bg-black opacity-60  abolute -z-10" />
      <div className="flex justify-between w-[100%] m-3">
        <h1 className="text-3xl font-bold">Top 15 Cryptos Of The World</h1>
        <Link to="/crypto">
          <p className="w-[100px] mx-10 text-blue-500">Show More</p>
        </Link>
      </div>
      <Crypto data={props.data.coins} limit={14} showSearchBar={false} />
      <hr className="w-[90%] m-auto h-[3px] bg-black opacity-60" />
      <div className="flex justify-between w-[100%] m-3">
        <h1 className="text-3xl font-bold">Cryptos News</h1>
        <Link to="/news">
          <p className="w-[100px] mx-10 text-blue-500">Show More</p>
        </Link>
      </div>
      <News data={props.news} limit={6}/>
      <hr className="w-[90%] m-auto h-[3px] bg-black opacity-60" />
    </>
  );
}
