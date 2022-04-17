import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const [value, setValue] = useState(new Date());
  const [color, setColor] = useState(true);
  const toggle = () => {
    setColor(!color);
  };
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="mb-5" />
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-xs-6 col-sm-6 col-lg-4">
              <h2>Market status and historic and present data</h2>
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6 col-lg-4">
              <Clock className="clockcenter" size={100} value={value} />
              <br />
            </div>
            <div className="col-md-4 col-xs-6 col-sm-6 col-lg-4">
              <h2>Market forecast and giving an note on it</h2>
              <br/>
                <p>Switch Your Theme here</p>
                <button
                  onClick={() => toggle()}
                  className="button"
                >
                  {color ? (
                    <FaSun className="Sun" size={25} />
                  ) : (
                    <FaMoon className="Moon" size={25} />
                  )} 
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
