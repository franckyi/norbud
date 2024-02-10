import Realizacja from "../ui/realizacje/realizacja";
import getData from "../lib/getData";
import { realizacjeRequest } from "../lib/realizacje-request";

// "acf": {
//   "title": "Przebudowa drogi powiatowej nr 1004P na odcinku Lotyń - Lubnica",
//   "sorting": 12,
//   "investor": "",
//   "contractor": "MARBRUK M.Kwiatkowski Sp. K.",
//   "dateStart": "20230201",
//   "dateEnd": "20230531",
//   "taskList": "<ul>\r\n \t<li>wykonanie podbudowy poszerzenia drogi na odcinku 3,6 km</li>\r\n</ul>",
//   "galleryId": "LUBNICA2023"
// },
async function Portfolio() {
  let data = await getData(realizacjeRequest.URL);
  const realizacje = data;
  console.log("realizacje", realizacje);
  // return <RealizacjeList />;
  {
    realizacje.length > 0 &&
      realizacje.map((realizacja: any) => {
        realizacja = realizacja.acf;
        return <h1 key={realizacja.galleryId}>{realizacja.title}</h1>;
        // return (
        //   <Realizacja
        //     key={realizacja.galleryId}
        //     title={realizacja.title}
        //     sorting={realizacja.sorting}
        //     investor={realizacja.investor}
        //     contractor={realizacja.contractor}
        //     dateStart={realizacja.dateStart}
        //     dateEnd={realizacja.dateEnd}
        //     taskList={realizacja.taskList}
        //     galleryId={realizacja.galleryId}
        //   />
        // );
      });
  }
}

export default Portfolio;
