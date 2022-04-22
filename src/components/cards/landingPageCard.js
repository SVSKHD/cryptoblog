import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
const LCard = ({ title, description, symbol, stats }) => {
  return (
    <>
      <div className="card m-1 height">
        <div className="card-body">
          <div className="card-section">
            <h4 class="card-title">{title} ({symbol})</h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">

              <p className="card-text">{description}</p>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6"></div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
export default LCard;
