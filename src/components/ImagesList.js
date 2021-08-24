import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImagesList = ({ images }) => {
  const newImages = images.map((image) => <ImageCard image={image} />);
  return <div className="card">{newImages}</div>;
};

export default ImagesList;
