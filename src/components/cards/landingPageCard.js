
const LCard = ({ title, description, symbol, stats ,  price }) => {
  return (
    <>
      <div className="card m-1 height shadow-card">
        <div className="card-body">
          <div className="card-section">
            <h4 class="card-title">{title} ({symbol})</h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <br/>
               <h5>Price : {price}</h5>
              <p className="card-text">{description}</p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12"></div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
export default LCard;
