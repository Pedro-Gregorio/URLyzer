/* eslint-disable react/prop-types */
export default function FAQItem({ index, question, answer }) {
  return (
    <div className="py-1 border-b outline-none group" tabIndex={index}>
      <div className="flex items-center justify-between py-3 text-secondary transition duration-300 cursor-pointer group ease">
        <div className="transition duration-300 ease group-hover:text-primary">
          {question}
        </div>
        <div className="transition duration-300 ease group-focus:-rotate-180 group-focus:text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
        <p className="py-2 text-justify text-primary">{answer}</p>
      </div>
    </div>
  );
}
