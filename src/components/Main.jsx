import { useDispatch } from "react-redux";
import { extract } from "../store/extractSlice";
import { useState } from "react";

export default function Main() {
  const dispatch = useDispatch();
  const [inpUrl, setInpUrl] = useState("");

  function handleInputChange(event) {
    setInpUrl(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const inputUrl = new URL(inpUrl);
      const searchParameters = [];
      inputUrl.searchParams.forEach((value, key) => {
        searchParameters.push([
          encodeURIComponent(key),
          encodeURIComponent(value),
        ]);
      });
      dispatch(
        extract({
          origin: inputUrl.origin,
          parameters: searchParameters,
          message: "",
        })
      );
      setInpUrl("");
    } catch (error) {
      console.log(error);
      dispatch(
        extract({ origin: "", parameters: [], message: "Invalid URL." })
      );
    }
  }

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="border border-primary rounded flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full py-4 px-4 flex items-center gap-4"
        >
          <input
            placeholder={"Paste your URL here to analyze it."}
            type="text"
            id="url"
            name="url"
            value={inpUrl}
            onChange={handleInputChange}
            className="outline-none px-2 py-2 w-full text-background placeholder:text-background rounded bg-secondary border border-tertiary"
            required
          />
          <button className="px-4 py-2 bg-secondary text-background rounded border border-secondary hover:bg-primary">
            Analyze
          </button>
        </form>
      </div>
    </div>
  );
}
