import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "./store/themeSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Result from "./components/Result";

function App() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  if (theme === "dark") {
    dispatch(setDarkTheme());
    document.documentElement.classList.add("dark");
  } else {
    dispatch(setLightTheme());
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <Header />
        <Main />
        <Result />
      </div>
      <Footer />
    </div>
  );
}

export default App;
