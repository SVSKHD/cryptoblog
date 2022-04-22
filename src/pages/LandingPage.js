import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getPrices } from "../helpers/Services/prices";
import Spinner from "../helpers/spinners/spinner";
import LCard from "../components/cards/landingPageCard";

const LandingPage = () => {
  const [dataLog, setDataLog] = useState([]);
  const [filter, setFilte] = useState("");
  const [keyword , setKeyword] = useState("")
  const [loading, setLoading] = useState(setTimeout(true, 3000));
  const [msg, setMessage] = useState("");

  useEffect(() => {
    getPrices()
      .then((data) => {
        setLoading(true);
        setDataLog(data.data.coins.sort((a, b) => a.rank - b.rank));
        console.log("filteredcoins", data.data.coins);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setMessage("Sorry Please come back after some back");
      });
  }, []);

  return (
    <>
      <div>
        <Layout title="Landing Page | Crypto Blog">
          <br />
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <input
                    placeholder="Search your fav coin"
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              {loading ? (
                <Spinner />
              ) : (
                <div className="row">
                  {dataLog.map((data, i) => (
                    <>
                      <div className="col-3">
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
