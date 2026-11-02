import Image from "next/image";
import Link from "next/link";
import "./reclaim.css";

export default function ReclaimLayout({ children }) {
  return (
    <>
      <a className="reclaim-skip" href="#reclaim-content">Skip to content</a>
      <header className="site-header reclaim-header">
        <Link className="brand" href="/" aria-label="FarNorth IT home">
          <strong>FarNorth IT</strong>
          <span className="brand-tree-wrap" aria-hidden="true">
            <Image className="brand-tree" src="/assets/images/tree-icon.webp" alt="" width={128} height={114} />
          </span>
        </Link>
        <nav className="nav-shell" aria-label="Reclaim navigation">
          <Link href="/reclaim/">Reclaim support</Link>
          <Link href="/reclaim/privacy/">Privacy policy</Link>
        </nav>
      </header>
      <main id="reclaim-content" className="reclaim-main" tabIndex={-1}>{children}</main>
      <footer className="reclaim-footer">
        <p><strong>Reclaim by FarNorth IT</strong></p>
        <nav aria-label="Footer navigation">
          <Link href="/">FarNorth IT</Link>
          <Link href="/reclaim/">Reclaim support</Link>
          <Link href="/reclaim/privacy/">Privacy policy</Link>
        </nav>
        <p>&copy; 2026 FarNorth IT · Cairns, Queensland, Australia</p>
      </footer>
    </>
  );
}
