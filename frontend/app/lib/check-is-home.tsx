import { usePathname } from "next/navigation";

function CheckisHome() {
  const pathName = usePathname();
  return pathName === "/" ? true : false;
}

export default CheckisHome;
