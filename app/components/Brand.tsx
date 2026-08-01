import Link from "next/link";

type BrandProps = {
  onNavigate?: () => void;
};

export function Brand({ onNavigate }: BrandProps) {
  return (
    <Link
      className="brand"
      href="/"
      onClick={onNavigate}
      aria-label="Khushu App home"
    >
      <span className="brand-icon" aria-hidden="true">
        <img src="/khushu-logo.png" alt="" />
      </span>
      <span>Khushu App</span>
    </Link>
  );
}
