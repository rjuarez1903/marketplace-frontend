import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import Classes from "./pages/Classes";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient"></div>
        <main className="app">
          {/* <Home /> */}
          <Classes />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
