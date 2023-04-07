import { GalleryItem } from '../GalleryItem/GalleryItem';
import { arrPhoto } from "../../utils/photos";

export const GalleryList: React.FC = () => {
  const photos = arrPhoto();
  return (
    <>
      {photos.length > 0 && (
        <ul>
          {photos.map(item => (
            <li key={item.id}>
              <GalleryItem photo={item.photo} description={item.description} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};