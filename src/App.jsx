import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import FAQ from "./components/FAQ";

function App() {
  const theme = useSelector((state) => state.theme.value);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <Header />
        <Main />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
