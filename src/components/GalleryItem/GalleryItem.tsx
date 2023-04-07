import React from "react";
interface IPhoto {
    photo: string;
    description: string;
}

export const GalleryItem: React.FC<IPhoto> = ({photo, description}) => {

  return (
    <>
  <img src={photo} alt={description} width='200px'/>
    </>
  );
};