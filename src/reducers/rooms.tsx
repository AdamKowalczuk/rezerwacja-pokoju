import { ADD_ROOM } from "../constants/actionTypes";



interface IRooms {
  name: string,
  description:string,
  location:string,
  numberOfStars:Number,
  price:Number,
  numberOfPeople:Number
}


let rooms2 = [
    {
        name: "Apartament EMILII PLATER - Centrum",
        description:"Luksusowy, dwupokojowy apartament dla 4 osób, w pobliżu Dworca Centralnego, Złotych Tarasów i Ronda ONZ. W samym centrum Warszawy. ",
        location:"Warsaw",
        numberOfStars:3,
        price:250,
        numberOfPeople:2,
        images:["https://cf.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be&o=&hp=1","https://cf.bstatic.com/xdata/images/hotel/max1024x768/194702399.jpg?k=14e9a332f4f20a67f72f8d5938cd6577f5c932a0653f59ae89d020f119f0d9be&o=&hp=1","https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_1280.jpg","https://cdn.pixabay.com/photo/2019/12/16/15/43/room-4699578_1280.jpg"],
        id:0
    },
    {
        name: "Apartament EMILII PLATER - Centrum",
        description:"Luksusowy, dwupokojowy apartament dla 4 osób, w pobliżu Dworca Centralnego, Złotych Tarasów i Ronda ONZ. W samym centrum Warszawy. ",
        location:"Warsaw",
        numberOfStars:1,
        price:250,
        numberOfPeople:2,
        images:['../icons/room.png'],
        id:1
    },
    {
        name: "Apartament EMILII PLATER - Centrum",
        description:"Luksusowy, dwupokojowy apartament dla 4 osób, w pobliżu Dworca Centralnego, Złotych Tarasów i Ronda ONZ. W samym centrum Warszawy. ",
        location:"Warsaw",
        numberOfStars:2,
        price:250,
        numberOfPeople:2,
        images:['../icons/room.png'],
        id:2
    },
    {
        name: "Apartament EMILII PLATER - Centrum",
        description:"Luksusowy, dwupokojowy apartament dla 4 osób, w pobliżu Dworca Centralnego, Złotych Tarasów i Ronda ONZ. W samym centrum Warszawy. ",
        location:"Warsaw",
        numberOfStars:3,
        price:250,
        numberOfPeople:2,
        images:['../icons/room.png'],
        id:3
    },

  ];
const rooms = (rooms:Array<IRooms> = rooms2, action:any) => {
  let newRoom:any=rooms;
  switch (action.type) {
    case ADD_ROOM:
      newRoom.push(action.newRoom)
      return newRoom;
    default:
      return rooms;
  }
};

export default rooms;