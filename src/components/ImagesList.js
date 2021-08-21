import React from "react";

const ImagesList = ({ images }) => {
  const newImages = images.map(({ id, description, urls }) => (
    <img key={id} alt={description} src={urls.regular} />
  ));
  return <div>{newImages}</div>;
};

export default ImagesList;
