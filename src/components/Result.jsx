import { useSelector } from "react-redux";
import ResultItem from "./ResultItem";

export default function Result() {
  const result = useSelector((state) => state.extract.result);

  return (
    <div className="container mx-auto px-4 mt-4">
      <ul className="p-4 border border-accent rounded">
        <p className="text-xl font-semibold text-secondary text-center mb-2">Query Parameters</p>
        {result.length !== 0 &&
          result.map((queryParameter, index) => (
            <>
              <li key={index} className="mb-2 py-2 border-b">
                <ResultItem query={queryParameter} />
              </li>
            </>
          ))}
        {result.length === 0 && <p>Yo, enter an URL</p>}
      </ul>
    </div>
  );
}
