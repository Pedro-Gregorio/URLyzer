export default function FooterIcon({ url, children }) {
  return (
    <li>
      <a href={url} className="group flex items-center gap-2" target="_blank">
        {children}
      </a>
    </li>
  );
}
