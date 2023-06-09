import { Component } from 'react';
import { ModalAbsolute, ModalFixed } from './Modal.styled';
export class Modal extends Component {
  hendleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');
    // console.log('currentTarget: на чем сработал обработчик события', event.currentTarget);
    // console.log('target: то куда клацнули', event.target);
    if (event.currentTarget === event.target) {
        this.props.onClose();
    }
  };

  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  componentDidUpdate() {
    'Modal componentDidUpdate';
  }

  render() {
    return (
      <ModalFixed onClick={this.hendleBackdropClick}>
        <ModalAbsolute>{this.props.children}</ModalAbsolute>
      </ModalFixed>
    );
  }
}