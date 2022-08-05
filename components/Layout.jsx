
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {

    return(
        <main className="flex-col h-full">
        <Header/>{children}<Footer/>
        </main>

    )

}

export default Layout;