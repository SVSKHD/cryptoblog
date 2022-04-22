import { Accordion , AccordionBody , AccordionHeader , AccordionItem } from "reactstrap";
const LCard = ({ title, description, stats }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
              <h5 class="card-title">{title}</h5>
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
