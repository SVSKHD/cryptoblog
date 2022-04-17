import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { getPrices } from "../helpers/Services/prices";

const LandingPage = () => {
  const [dataLog, setDataLog] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [loading, setLoading] = useState(false);
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
  console.log("sorted", sortedData);

  return (
    <>
      <div>
        <Layout title="Landing Page | Crypto Blog">
          <br />
          <div className="card">
            <div className="card-body"></div>
          </div>
        </Layout>
      </div>
    </>
  );
};
export default LandingPage;
