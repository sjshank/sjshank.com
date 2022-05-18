import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Competences from "./components/competency";
import Footer from "./components/footer";
import Header from "./components/header";
import Navigation from "./components/nav";
import Portfolio from "./components/portfolio";
import Services from "./components/services";

const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Competences />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
