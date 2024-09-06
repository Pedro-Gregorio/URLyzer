import { useDispatch, useSelector } from "react-redux";
import { extract } from "../store/extractSlice";
import Title from "./ui/Title";
import Parameters from "./ui/Parameters";

export default function Result() {
  const origin = useSelector((state) => state.extract.origin);
  const parameters = useSelector((state) => state.extract.parameters);
  const message = useSelector((state) => state.extract.message);
  const dispatch = useDispatch();

  function handleDummyUrlClick() {
    dispatch(
      extract({
        origin: "https://helloworld.com",
        parameters: [["hello", "stranger"]],
        message: "",
      })
    );
  }

  if (message !== "") {
    return (
      <div className="container mx-auto px-4 mt-4">
        <p className="text-secondary">{message}</p>
      </div>
    );
  }

  if (origin === "" && message === "") {
    return (
      <div className="container mx-auto px-4 mt-4">
        <p className="text-secondary">Paste an URL above to analyze it.</p>
        <p className="text-tertiary">
          Here&apos;s an example:{" "}
          <button
            className="underline hover:animate-pulse"
            onClick={handleDummyUrlClick}
          >
            https://helloworld.com?hello=stranger
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mt-4 ">
      <ul className="border border-accent rounded px-4 py-4">
        <Title title={origin} />
        <div className="p-4 border border-accent rounded">
          <Parameters parameters={parameters} />
        </div>
      </ul>
    </div>
  );
}
