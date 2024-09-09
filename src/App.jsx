import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "./store/themeSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import FAQ from "./components/FAQ";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);
  if (theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } else {
    const userTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (userTheme.matches) {
      dispatch(setDarkTheme());
    } else {
      dispatch(setLightTheme());
    }
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
