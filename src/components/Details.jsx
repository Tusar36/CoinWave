import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fetch from "./fetch";
import millify from "millify";
import Chart from "./Chart";
import Loading from "./Loading";
import NetWorkError from "./NetWorkError"
export default function Details() {
  let { id } = useParams();
  let item = id.slice(1, id.length);
  let [data, setData] = useState("");
  let [chartData, setChartData] = useState();
  let [flag, setFlag] = useState(false);
  let [NError, setNError] = useState(false);
  let [timePeriod, setTimePeriod] = useState("24h");
  const Crypto_Details_Url = `https://coinranking1.p.rapidapi.com/coin/${item}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const Chart_Details_Url = `https://coinranking1.p.rapidapi.com/coin/${item}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`;

  let fetchData = async () => {
    try {
      let cryptoDetails = await Fetch(
        Crypto_Details_Url,
        options
      );
      let chartDetails = await Fetch(Chart_Details_Url, options);
      setData(cryptoDetails.data.coin);
      setChartData(chartDetails.data);
      setFlag(true);
    } catch (error) {
      setNError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [timePeriod]);

  let stats = [
    { label: "Rank", data: data.rank },
    { label: "Markets", data: data.numberOfMarkets },
    { label: "Exchanges", data: data.numberOfExchanges },
    { label: "Market Cap", data: `$ ${millify(data.marketCap)}` },
    { label: "Price (USD)", data: `$ ${millify(data.price)}` },
    { label: "BTC Price", data: data.btcPrice },
  ];
  return flag ? (
    <>
      <div className="w-[100%] h-14 text-4xl ml-3 text-blue-600 text-center mb-5">
        {data.name}
        {`(${data.symbol})`}
        <div className="text-sm text-gray-500">{`(${data.name} stats, price in USD and links)`}</div>
      </div>

      <h1 className="w-[100%] h-10 text-2xl text-blue-600 ml-3 mt-3">
        {data.name} Price in USD
      </h1>

      <div className="w-[97%] m-3 flex justify-between flex-wrap">
        <select
          name=""
          id=""
          onChange={(e) => {
            setTimePeriod(e.target.value);
          }}
          className=" p-2 px-5"
        >
          <option value="24h">24h</option>
          <option value="7d">7d</option>
          <option value="3m">3m</option>
          <option value="1y">1y</option>
          <option value="5y">5y</option>
        </select>
        <div className="flex">
          <div className="w-[60px] h-[30px] bg-[#0071bd]"></div>
          <span>Price in USD</span>
        </div>
        <div className="font-bold m-3">Change:{chartData.change}%</div>
      </div>

      <Chart data={chartData} timePeriod={timePeriod}/>

      <div className="ml-3 w-[100%] mt-5">
        <h1 className="text-2xl text-black ">{data.name} Global Stats:</h1>
        <div className=" grid w-[100%] grid-cols-2  mt-3 mb-5">
          {stats.map((element) => {
            return (
              <div className="w-[95%] h-11 mb-[5px] flex justify-between items-center shadow-lg opacity-80 py-4">
                <div className="ml-3 text-gray-600 ">{element.label}</div>
                <div className="mr-3 font-bold">{element.data}</div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="w-[100%] h-10 text-3xl text-blue-600 ml-3 mt-3">
        What is {data.name}?
      </h1>
      <div className="w-[100%] p-3 mb-3">{data.description}</div>

      <div className="ml-3 w-[100%] mt-5">
        <h1 className="w-[100%] h-10 text-3xl text-blue-600 ml-3 mt-3">
          {data.name} Links
        </h1>
        <div className=" flex w-[100%] flex-wrap justify-between mt-3 mb-5">
          {data.links.map((element) => {
            return (
              <div className="w-[95%] h-11 mb-[5px] flex justify-between items-center shadow-lg opacity-80 py-4" key={element.url}>
                <div className="ml-3 text-gray-600 ">{element.type}</div>
                <div className="mr-3 font-bold text-blue-500" target="_blank">
                  <a href={element.url} target="_blank">
                    {element.name}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : NError ? (
    <NetWorkError />
  ) : (
    <Loading />
  );
}
