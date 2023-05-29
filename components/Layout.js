import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen relative">
        <Header />
        <div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
