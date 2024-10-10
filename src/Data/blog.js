import quantum from "../assets/quantum.png";
import Img from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";


const smallBlogs = [
    {
      id: 1,
      img: Img,
      header: "Quantum Computer Doom Challenge",
      text: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.",
    },
    { 
      id: 2,
      img: Img3,
      header: "Quantum Computer Doom Challenge",
      text: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.",
    },
    {
      id: 3,
      img: quantum,
      header: "Quantum Computer Doom Challenge",
      text: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.",
    },
]


 export const mediumBlogs = [
  {
    id: 10,
    img: quantum,
    header: "Quantum Computer Doom Challenge",
    text: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.",
  },
  {
    id: 11,
    img: quantum,
    header: "Quantum Computer Doom Challenge",
    text: "According to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement fo.",
  },
 
]
export default  smallBlogs;
export const allBlogs = [...smallBlogs, ...mediumBlogs];
