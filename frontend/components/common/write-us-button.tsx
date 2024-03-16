import { WriteUsButtonProps } from "@/app/types/write-us-button-props";
import Link from "next/link";

const defaultClasses =
  "inline-block max-w-lg px-4 py-1 rounded-full text-center";
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
