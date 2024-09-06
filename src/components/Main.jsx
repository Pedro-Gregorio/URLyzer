import { useDispatch, useSelector } from "react-redux";
import { extract } from "../store/extractSlice";

export default function Main() {
  const url = useSelector((state) => state.extract.url);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    let queryString = data.url.split("?")[1];
    queryString = queryString ? queryString.split("#")[0] : "";

    let queryParams = [];
    if (queryString) {
      queryString.split("&").forEach((param) => {
        const [key, value] = param.split("=");
        queryParams.push([decodeURIComponent(key), decodeURIComponent(value)]); // Store as [key, value] pairs
      });
    }

    dispatch(extract({ url: data.url, result: queryParams }));

    console.log("Query Parameters:", queryParams);
  }

  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="border border-primary rounded flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full py-4 px-4 flex items-center gap-4"
        >
          <input
            placeholder={url !== "" ? url : "Enter your URL"}
            type="text"
            id="url"
            name="url"
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
