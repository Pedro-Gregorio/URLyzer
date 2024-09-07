import { useState } from "react";

export default function Parameter({ query }) {
  const [copying, setCopying] = useState(false);

  function handleCopyToClipboard() {
    const clipboardValue = decodeURIComponent(query[1]).replace(/ /g, "+");
    setCopying(true);
    navigator.clipboard.writeText(clipboardValue);
    setTimeout(() => {
      setCopying(false);
    }, 4000);
  }

  function clipboard() {
    if (copying) {
      return <p className="text-primary animate-pulse">Copied!</p>;
    } else {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 fill-primary group-hover:fill-secondary"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
          />
          <path d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z" />
        </svg>
      );
    }
  }

  return (
    <div>
      <p className="text-tertiary">Key: {query[0]}</p>
      <button
        className="group w-full flex items-center justify-between"
        onClick={handleCopyToClipboard}
      >
        <div className="truncate overflow-hidden text-primary">
          Value: <span className="font-semibold text-xl">{query[1]}</span>
        </div>
        <div>{clipboard()}</div>
      </button>
    </div>
  );
}
