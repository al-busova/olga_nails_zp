import React from "react";
import { ImageItem } from "./GalleryItem.styled";
interface IPhoto {
  photo: string;
  description: string;
}

export const GalleryItem: React.FC<IPhoto> = ({ photo, description }) => {
  return (
    <>
      <ImageItem src={photo} alt={description} />
    </>
  );
};
