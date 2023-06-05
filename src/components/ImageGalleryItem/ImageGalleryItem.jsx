import { Component } from 'react';
import { Modal } from 'components/Modal';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <GalleryItemImg src={webformatURL} alt={tags} />
        </GalleryItem>
        {this.state.showModal && (<Modal onClose={this.toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>)}
      </>
    );
  }
}

