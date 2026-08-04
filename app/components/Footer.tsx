import Link from "next/link";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand />
          <p>Simple prayer focus tracking, one salah at a time.</p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <Link href="/privacy">Privacy</Link>
          <a href="mailto:khushu.help@gmail.com">Contact email</a>
          <span className="footer-placeholder-link" aria-disabled="true">
            Instagram
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Khushu App</p>
        <p>Made with purpose.</p>
      </div>
    </footer>
  );
}
