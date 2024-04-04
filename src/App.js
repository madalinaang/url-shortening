import "./styles/style.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Shorten />
      <Statistics />
      <Boost />
      <Footer />
    </main>
  );
}

export default App;
