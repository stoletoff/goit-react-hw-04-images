import { useState } from 'react';
import { Modal } from 'components/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image: {webformatURL, largeImageURL, tags } }) => {
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <GalleryItemImg src={webformatURL} alt={tags}></GalleryItemImg>
      </GalleryItem>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape(
   { webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    }
  )
}