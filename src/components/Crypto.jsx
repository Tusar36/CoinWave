import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Error from "./Error";
import millify from "millify";
export default function Crypto(props) {
  let [coins, setResult] = useState(props.data);
  let [coinlist, setCoinList] = useState(props.data);
  let [search, setSearch] = useState("");
  let fixed=0;
  useEffect(() => {
    setResult(props.data);
    let a = coinlist.filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    });
    setResult(a);
  }, [search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [fixed]);
  return (
    <>
      {props.showSearchBar && (
        <div className="w-[100%] flex justify-center bg-white ">
          {" "}
          <input
            type="text"
            name=""
            id=""
            placeholder="Search Coins"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="w-[60%] border border-black border-opacity-80 h-10 outline-none m-3 p-4"
          />{" "}
        </div>
      )}
      <div className="flex flex-wrap gap-2 justify-center min-h-screen">
        {coins.map((element, i) => {
          if (i <= props.limit) {
            return (
              <Link to={`/crypto/:${element.uuid}`}>
                <Card
                  name={element.name}
                  url={element.iconUrl}
                  cap={`$${millify(element.marketCap)}`}
                  change={element.change}
                  price={element.price}
                  btc={element.btcPrice}
                  uid={element.symbol}
                  rank={element.rank}
                  key={element.symbol}
                />
              </Link>
              
            );
          }
        })}
        {(coins.length==0) && <Error/>}
      </div>
    </>
  );
}
