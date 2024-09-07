import { useSelector } from "react-redux";
import Parameters from "./ui/Parameters";

export default function Result() {
  const origin = useSelector((state) => state.extract.origin);
  const parameters = useSelector((state) => state.extract.parameters);
  const message = useSelector((state) => state.extract.message);

  if (message !== "") {
    return (
      <div className="container mx-auto px-4 mt-4">
        <p className="text-secondary">{message}</p>
      </div>
    );
  }

  return (
    origin !== "" && (
      <div className="container mx-auto mt-10 ">
        <div className="border border-accent rounded px-4 py-4">
          <h2 className="text-center text-2xl font-bold text-secondary mb-4">
            Extracted Parameters
          </h2>
          <p className="text-sm text-secondary mb-2">
            Base URL: <span className="text-lg">{origin}</span>
          </p>
          <div className="p-4 border border-accent rounded">
            <Parameters parameters={parameters} />
          </div>
          <p className="mt-4 px-4 flex justify-end text-tertiary text-sm">
            Note: You can quickly copy any query parameter value to your
            clipboard by clicking on the icon
            <svg
              className="h-6 fill-tertiary"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.33199 7.68464C6.94146 8.07517 6.3083 8.07517 5.91777 7.68464C5.52725 7.29412 5.52725 6.66095 5.91777 6.27043L10.5834 1.60483C11.3644 0.823781 12.6308 0.82378 13.4118 1.60483L18.0802 6.27327C18.4707 6.66379 18.4707 7.29696 18.0802 7.68748C17.6897 8.078 17.0565 8.078 16.666 7.68748L13 4.02145V21.9999C13 22.5522 12.5523 22.9999 12 22.9999C11.4477 22.9999 11 22.5522 11 21.9999V4.01666L7.33199 7.68464Z" />
            </svg>
          </p>
        </div>
      </div>
    )
  );
}
