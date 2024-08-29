import React  from "react";
import Carousel from "./components/carousel/Carousel";

function App() {

  const slides = [
   "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
   "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=",
   "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
   "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=612x612&w=0&k=20&c=0xb_bb-NBIxjiJL_kqY-o3dCjv2PmKFZfRjHcVEijDc=", 
  ];
  return (
      <div className="w-[45%] m-auto pt-10 px-4">
        <Carousel slides={slides} />
      </div>
  );
}

export default App;
