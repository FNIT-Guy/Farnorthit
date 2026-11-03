import Image from "next/image";
import Link from "next/link";
import "./tembrilo.css";

export default function TembriloLayout({ children }) {
  return (
    <>
      <a className="tembrilo-skip" href="#tembrilo-content">Skip to content</a>
      <header className="site-header tembrilo-header">
        <Link className="brand" href="/" aria-label="FarNorth IT home">
          <strong>FarNorth IT</strong>
          <span className="brand-tree-wrap" aria-hidden="true">
            <Image className="brand-tree" src="/assets/images/tree-icon.webp" alt="" width={128} height={114} />
          </span>
        </Link>
        <nav className="nav-shell" aria-label="Tembrilo navigation">
          <Link href="/tembrilo/">Tembrilo support</Link>
          <Link href="/tembrilo/privacy/">Privacy policy</Link>
        </nav>
      </header>
      <main id="tembrilo-content" className="tembrilo-main" tabIndex={-1}>{children}</main>
      <footer className="tembrilo-footer">
        <p><strong>Tembrilo by FarNorth IT</strong></p>
        <nav aria-label="Footer navigation">
          <Link href="/">FarNorth IT</Link>
          <Link href="/tembrilo/">Tembrilo support</Link>
          <Link href="/tembrilo/privacy/">Privacy policy</Link>
        </nav>
        <p>&copy; 2026 FarNorth IT · Cairns, Queensland, Australia</p>
      </footer>
    </>
  );
}
