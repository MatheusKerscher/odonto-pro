import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={`text-2xl font-bold text-zinc-900 ${className}`}>
      <Link href="/">
        Odonto<span className="text-emerald-500">PRO</span>
      </Link>
    </h1>
  );
};

export default Logo;
