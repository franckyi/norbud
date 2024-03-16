export interface PortfolioItemProps {
  id: number;
  title: { rendered: string };
  acf: {
    category: string;
    title: string;
    sorting: number;
    investor: string;
    contractor: string;
    dateStart: string;
    dateEnd: string;
    taskList: string;
    galleryId: string;
  };
}
