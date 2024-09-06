import { useSelector, useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "../store/themeSlice";

export default function Header() {
  const theme = useSelector((state) => state.theme.value);
  const icon = useSelector((state) => state.theme.icon);
  const dispatch = useDispatch();

  let buttonClasses =
    theme === "dark"
      ? "w-8 hover:animate-spin-slow"
      : "w-8 hover:animate-pulse";

  function handleThemeChange() {
    if (theme === "dark") {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  }

  return (
    <div className="w-full px-8 py-8">
      <div className="mx-auto px-16 flex justify-between items-center">
        <h1 className="text-3xl font-bold lg:text-4xl text-primary">URLyzer</h1>
        <button onClick={handleThemeChange}>
          <img
            src={icon}
            alt={`${theme} mode icon`}
            className={buttonClasses}
          />
        </button>
      </div>
    </div>
  );
}
