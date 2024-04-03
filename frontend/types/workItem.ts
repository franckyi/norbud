export interface WorkItemI {
  id: number;
  title: { rendered: string };
  acf: {
    category: {
      sport: boolean;
      road: boolean;
      demolition: boolean;
    };
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
