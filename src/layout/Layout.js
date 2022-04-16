import Header from "./Header"
import Seo from "../helpers/Seo/Seo"

const Layout = (props) => {
    return (
        <>
            <div className="container">
                <Header />
                <Seo title={props.title}/>
                {props.children}
            </div>
        </>
    )
}
export default Layout