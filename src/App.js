import "./styles/style.scss";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Statistics />
      <Boost />
      <Footer />
    </main>
  );
}

export default App;
