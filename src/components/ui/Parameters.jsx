/* eslint-disable react/prop-types */
import Parameter from "./Parameter";

export default function Parameters({ parameters }) {
  return (
    <div>
      <p className="text-xl font-semibold text-w text-center mb-2">
        Query Parameters
      </p>
      <ul>
        {parameters.map((queryParameter, index) => (
          <li key={index} className="mb-2 py-2 border-b border-accent">
            <Parameter parameter={queryParameter} />
          </li>
        ))}
      </ul>
    </div>
  );
}
