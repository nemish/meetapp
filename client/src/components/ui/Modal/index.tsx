import * as React from 'react';
import styled from 'react-emotion'
import { SmallButton } from '@ui/Button';
import {
  pure,
  compose,
  withState,
  withHandlers,
} from 'recompose';

interface IModal {
  show: boolean;
  onToggle(): void;
  renderHeader?(): JSX.Element;
  renderBody?(): JSX.Element;
}

interface IModalContainer {
  show: boolean;
}

const ModalContainer = styled('div')`
  position: fixed;
  display: ${(props: IModalContainer) => props.show ? 'flex' : 'none'};
  z-index: 2;
  background: #83b787;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: column;
`;

const CloseButton = styled(SmallButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const withModal = compose(
  withState('show', 'toggle', false),
  withHandlers({
    onToggle: (props: {show: boolean, toggle(isShow : boolean): any}) => () => props.toggle(!props.show)
  })
);

const Modal = ({show, onToggle, renderHeader, renderBody}: IModal) => {
  return <ModalContainer show={show}>
    <CloseButton type="danger" onClick={onToggle}>Close</CloseButton>
    {renderHeader && renderHeader()}
    {renderBody && renderBody()}
  </ModalContainer>
};

export default Modal;
