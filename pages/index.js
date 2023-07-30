import Header from "../modules/header";
import Footer from "../modules/footer";
import Banner from "../modules/banner";
import Process from "../modules/process";
import Portfolio from "../modules/portfolio";
import Services from "../modules/services";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div id="main">
        <div>
          <Banner />
        </div>
        <div>
          <Process />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default App;