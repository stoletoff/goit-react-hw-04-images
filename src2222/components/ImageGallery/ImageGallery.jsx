import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(img => (
        <ImageGalleryItem image={img} key={img.id} />
      ))}
    </GalleryList>
  );
};
