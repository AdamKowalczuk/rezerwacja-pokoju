import { ADD_ROOM, EDIT_ROOM } from "../constants/actionTypes";

interface IRooms {
  name: String;
  description: String;
  location: String;
  price: Number;
  numberOfPeople: Number;
  numberOfStars: Number;
  image: String;
  id: Number;
}

let rooms2 = [
  {
    name: "Apartament EMILII PLATER III - Centrum",
    description:
      "Apartament składa się z salonu z aneksem kuchennym, sypialni oraz łazienki, urządzony w wysokim standardzie z najwyższą starannością i dbałością o szczegóły.",
    location: "Warszawa",
    numberOfStars: 3,
    price: 250,
    numberOfPeople: 4,
    image: "https://i.noclegowo.pl/l/511058-858-warszawa-apartament-emilii-plater-iii-centrum.jpg",
    id: 0,
  },
  {
    name: "Apartamenty CHMIELNA - CENTRUM",
    description:
      "Luksusowy, trzypokojowy apartament z klimatyzacją. Miejsce do spania dla sześciu osób, dwuosobowe łóżka w sypialniach, w salonie rozkładana sofa dla dwóch osób (140x180). ",
    location: "Warszawa",
    numberOfStars: 3,
    price: 280,
    numberOfPeople: 6,
    image: "https://i.noclegowo.pl/l/510864-628-warszawa-apartamenty-chmielna-centrum.jpg",
    id: 1,
  },
  {
    name: "Apartament ANDERSA II",
    description:
      "Elegancki, a zarazem przytulny apartament w jasnych, neutralnych barwach. Zlokalizowany na 4 piętrze budynku położonego na przeciwko Ambasady Chińskiej Reupubliki Ludowej, na warszawskim Muranowie, skąd jest bardzo bliska odległość spacerowa od Nowego i Starego Miasta.Tuż obok również piękny Ogród Krasińskich.Apartament 2-pokojowy tuż po gruntownym remoncie, z wygodnym łóżkiem dwuosobowym w sypialni oraz sofą rozkładaną",
    location: "Warszawa",
    numberOfStars: 3,
    price: 220,
    numberOfPeople: 3,
    image: "https://i.noclegowo.pl/l/508340-100-warszawa-apartament-andersa-ii-centrum.jpg",
    id: 2,
  },
  {
    name: "APARTAMENTY STARÓWKA",
    description:
      "Mamy Państwu do zaoferowania 1,2,3 - pokojowe, w pełni wyposażone, komfortowe apartamenty w samym sercu Gdańskiej Starówki !!! Większość obiektów zabytkowych tj. Neptun, Dwór Artusa, Ratusz, kościół Mariacki znajdują się w zasięgu ręki . Wokół wyśmienite restauracje i puby. Miejsce to jest bardzo dobrze skomunikowane, 8 minut pieszo do dworca głównego.",
    location: "Gdańsk",
    numberOfStars: 2,
    price: 180,
    numberOfPeople: 5,
    image: "https://i.noclegowo.pl/l/145471-356-gdansk-apartamenty-starowka-tanio-parking.jpg",
    id: 3,
  },

  {
    name: "CITY CENTRAL Hostels & Apartments",
    description:
      "Specjalnie dla Państwa przygotowaliśmy wygodne pokoje 1-6-os i niezależne apartamenty 1-8-os w bardzo dobrym standardzie oraz możliwie najniższych cenach. Nasza lokalizacja w samym centrum miasta (Rynek, Stare Miasto) pozwoli Państwu bardzo szybko załatwić sprawy biznesowe oraz wykorzystać wolny czas na podziwianie najciekawszych atrakcji i zabytków Wrocławia.",
    location: "Wrocław",
    numberOfStars: 2,
    price: 140,
    numberOfPeople: 6,
    image: "https://i.noclegowo.pl/l/453854-720-wroclaw-city-central-pokoje-i-apartamenty.jpg",
    id: 4,
  },
  {
    name: "Tahiti | Apartament dla 3 osób",
    description:
      "Apartament składa się z pokoju połączonego z kompletnie wyposażonym aneksem kuchennym, przedpokoju z szafą wnękową, przestronnej łazienki oraz balkonu. Miejsce do spania to rozkładana, wygodna dwuosobowa sofa oraz pojedynczy fotel również z możliwością spania. Do państwa dyspozycji jest również telewizor z funkcją Internetu oraz bezprzewodowa sieć wi-fi. ",
    location: "Wrocław",
    numberOfStars: 3,
    price: 180,
    numberOfPeople: 3,
    image: "https://i.noclegowo.pl/l/128227-193-wroclaw-apartament-tahiti.jpg",
    id: 5,
  },
];
const rooms = (rooms: Array<IRooms> = rooms2, action: any) => {
  let newRoom: any = rooms;
  switch (action.type) {
    case ADD_ROOM:
      newRoom.push(action.newRoom);
      return newRoom;
    case EDIT_ROOM:
      newRoom[action.roomID] = action.editedRoom;
      return newRoom;
    default:
      return rooms;
  }
};

export default rooms;
