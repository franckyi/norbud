export interface RentItemProps {
  id: number;
  title: { rendered: string };
  acf: {
    title: string;
    desc: string;
    galleryId: string;
  };
}
