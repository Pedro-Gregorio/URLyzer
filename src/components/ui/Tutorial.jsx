/* eslint-disable react/prop-types */
export default function Tutorial({ handleClick, show }) {
  return (
    <section id="tutorial" className={`mt-8 ${show ? "hidden" : null}`}>
      <p className="text-secondary">Paste an URL above to analyze it.</p>
      <p className="text-tertiary">
        Here&apos;s an example (you can click the url):{" "}
        <button className="underline hover:animate-pulse" onClick={handleClick}>
          https://helloworld.com?hello=stranger
        </button>
      </p>
    </section>
  );
}
