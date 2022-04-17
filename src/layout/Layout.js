import Header from "./Header"
import Seo from "../helpers/Seo/Seo"

const Layout = (props) => {
    return (
        <div>
        <div>
            <div className="container">
                <Header />
                <Seo title={props.title}/>
                {props.children}
            </div>
        </div>
    </div>
    )
}
export default Layout