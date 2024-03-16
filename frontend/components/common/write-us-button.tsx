import Link from "next/link";

const defaultClasses =
  "inline-block max-w-lg px-4 py-1 rounded-full text-center";

interface WriteUsButtonProps {
  bg: string;
  bgHover: string;
  textColor: string;
}

function WriteUsButton({ bg, bgHover, textColor }: WriteUsButtonProps) {
  return (
    <Link
      href="/#contact-section"
      className={`${defaultClasses} ${bg} ${bgHover} ${textColor}`}
    >
      Zleć projekt
    </Link>
  );
}

export default WriteUsButton;
