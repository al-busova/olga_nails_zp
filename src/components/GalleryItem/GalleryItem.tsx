import React from "react";
import { ImageItem, Overlay, Heart, WrapperDiscription, Share } from "./GalleryItem.styled";



interface IPhoto {
  photo: string;
  description: string;
  technology: string;
  shape: string;
}

export const GalleryItem: React.FC<IPhoto> = ({
  photo,
  description,
  technology,
  shape,
}) => {
  return (
    <>
      <ImageItem src={photo} alt={description} />
      <Overlay>
        <Heart />
        <WrapperDiscription>
          <p>
          Опис: {technology} {shape}
        </p>
        <Share />
        </WrapperDiscription>
      </Overlay>
    </>
  );
};
