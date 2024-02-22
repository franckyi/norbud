import { WriteUsButtonProps } from "@/app/types/write-us-button-props";

const defaultClasses =
  "inline-block max-w-lg px-4 py-1 rounded-full text-center";
function WriteUsButton({ bg, bgHover, textColor }: WriteUsButtonProps) {
  return (
    <a
      href="mailto:biuro@nor-bud.com"
      className={`${defaultClasses} ${bg} ${bgHover} ${textColor}`}
    >
      Zleć projekt
    </a>
  );
}

export default WriteUsButton;
