export default function Title({ title }) {
  return (
    <div className="px-2 text-xl font-semibold text-secondary mb-2">
      <p className="text-sm text-tertiary">
        URL: <span className="text-lg">{title}</span>
      </p>
    </div>
  );
}
