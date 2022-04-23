import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getPrices } from "../helpers/Services/prices";
import Spinner from "../helpers/spinners/spinner";
import LCard from "../components/cards/landingPageCard";

const LandingPage = () => {
  const [dataLog, setDataLog] = useState([]);
  //const [filter, setFilte] = useState("");
  //const [keyword , setKeyword] = useState("")
  const [loading, setLoading] = useState(setTimeout(true, 3000));
  const [msg, setMessage] = useState("");
  const [currencyChange , setCC] = useState(false)
  const [mode, setMode] = useState("USD")

  useEffect(() => {
    getPrices(mode)
      .then((data) => {
        setLoading(true);
        setDataLog(data.data.coins.sort((a, b) => a.rank - b.rank));
        console.log("filteredcoins", data.data.coins);
        setLoading(false);
        setMessage("");
      })
      .catch((err) => {
        setLoading(false);
        setMessage("Sorry Please come back after some back");
      });
  }, []);

  const currencyManipulate = (value) =>{
    setMode(value)
    setCC(true)
    setLoading(true)
    getPrices(value).then((data) => {
      setDataLog(data.data.coins.sort((a, b) => a.rank - b.rank));
      console.log("filteredcoins", data.data.coins);
      setLoading(false);
      setMessage("");
    })
    .catch((err) => {
      setLoading(false);
      setMessage("Sorry Please come back after some back");
    });
  }

  return (
    <>
      <div>
        <Layout title="Landing Page | Crypto Blog">
          <br />
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button onClick={()=>currencyManipulate("USD")} type="button" class="btn btn-dark">
                      USD
                    </button>
                    <button onClick={()=>currencyManipulate("INR")}  type="button" class="btn btn-dark">
                      INR
                    </button>
                    <button onClick={()=>currencyManipulate("EUR")}  type="button" class="btn btn-dark">
                      EUR
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <input
                    placeholder="Search your fav coin"
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              {loading ? (
                <div className="text-center">
                  <br/>
                <Spinner />
                </div>
              ) : (
                <div className="row">
                  {msg}
                  {dataLog.map((data, i) => (
                    <>
                      <div key={i} className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
                        <LCard
                          title={data.name}
                          symbol={data.symbol}
                          price={data.price}
                        />
                      </div>
                    </>
                  ))}
                </div>

              )}
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};
export default LandingPage;
