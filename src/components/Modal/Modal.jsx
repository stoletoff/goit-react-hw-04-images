import { useEffect } from 'react';
import { ModalFixed, ModalAbsolute } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return (
    <ModalFixed onClick={handleBackdropClick}>
      <ModalAbsolute>{children}</ModalAbsolute>
    </ModalFixed>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
