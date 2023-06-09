import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';


export const ImageGallery = ({ images }) => {
  return (
      <GalleryList>
        {images.map(img => (
          <ImageGalleryItem image={img} key={img.id} />
        ))}
      </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
};
