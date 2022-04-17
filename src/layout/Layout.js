import Header from "./Header";
import Seo from "../helpers/Seo/Seo";

const Layout = (props) => {
  return (
    <div>
      <div>
        <body>
          <div className="container">
            <Header />
            <Seo title={props.title} />
            {props.children}
          </div>
        </body>
      </div>
    </div>
  );
};
export default Layout;
