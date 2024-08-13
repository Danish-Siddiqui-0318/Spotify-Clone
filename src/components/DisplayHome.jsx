import React from "react";
import Navbar from "./Navbar.jsx";
import AlbumItem from "./AlbumItem.jsx";
import { albumsData, songsData } from "../assets/assets.js";
import SongItme from "./SongItme.jsx";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto ">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hit</h1>
        <div className="flex overflow-auto ">
          {songsData.map((item, index) => (
            <SongItme
              key={index}
              image={item.image}
              id={item.id}
              name={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
