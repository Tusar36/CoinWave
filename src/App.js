import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Crypto from "./components/Crypto";
import Navbar from "./components/Navbar";
import Fetch from "./components/fetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Details from "./components/Details";
import Footer from "./components/Footer";
import NetWorkError from "./components/NetWorkError";
import News from "./components/News";
function App() {
  const Crypto_url =
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=1000&offset=0";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "179184fad1msh5e9059594f90047p1b0851jsn636d6159a65b",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  const News_url = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
  const Noptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f09e3798b1msh149bd36751234fcp12cc11jsn539bb3254364',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };
  let [result, setResult] = useState();

  let [falg, setFlag] = useState(false);

  let [error, setError] = useState(false);

  let [NewsResult, setNews] = useState();

  let fetchData = async () => {
    try {
      let crypto = await Fetch(Crypto_url, options);
      setResult(crypto.data);
      let news = await Fetch(News_url, Noptions);
      setNews(news);
      setFlag(true);
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [News_url]); //Dependency to make sure it dose not fetch data on every small update

  return (
    <>
      {falg ? (
        <Router>
          <div className="md:hidden sticky top-0">
            <Navbar />
          </div>
          <div className="flex">
            <div className=" sticky top-0 hidden md:block ">
              <Sidebar />
            </div>
            <div className="w-[100%] overflow-hidden">
              <Routes>
                <Route
                  path="/"
                  element={<Home data={result} news={NewsResult} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News data={NewsResult} limit={"100"}/>} />

                <Route
                  path="/crypto"
                  element={
                    <Crypto
                      data={result.coins}
                      limit={result.coins.length}
                      showSearchBar={true}
                    />
                  }
                />

                <Route path="/crypto/:id" element={<Details />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      ) : error ? (
        <NetWorkError />
      ) : (
        <Loading />
      )}
    </>
  );
}
export default App;
