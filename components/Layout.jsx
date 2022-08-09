
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {

    return(
        <main className="min-h-screen">
        <Header/>{children}<Footer/>
        </main>

    )

}

export default Layout;