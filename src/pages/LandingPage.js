import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getPrices } from "../helpers/Services/prices";
import Spinner from "../helpers/spinners/spinner";
import LCard from "../components/cards/landingPageCard"


const LandingPage = () => {
  const [dataLog, setDataLog] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(setTimeout(true , 3000));
  const [msg, setMessage] = useState("");

  useEffect(() => {
    getPrices()
      .then((data) => {
        setLoading(true);
        setDataLog(data.data.coins);
        setSortedData(dataLog.sort((a, b) => a.rank - b.rank));
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
              {loading ? (
                <Spinner/>
              ) : (
                <LCard title="loaded"/>
              )}
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};
export default LandingPage;
