import Modal from 'react-modal'
import { CancelButton, ConfirmButton, ModalText, ButtonBox } from './style';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '597px',
    height: '262px', 
    background: '#333333',
    border: 'solid 1px #333333',
    borderRadius: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
};

Modal.setAppElement('.root');
export default function DeleteModal({openModal, setOpenModal}){
  let subtitle

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }


  return (
    <Modal isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setOpenModal(false)}
        style={customStyles}
        contentLabel="Example Modal">
      <ModalText>Are you sure you want to delete this post?</ModalText>
      <ButtonBox>
        <CancelButton onClick={() => setOpenModal(false)} >No, go back</CancelButton>
        <ConfirmButton>Yes, delete it</ConfirmButton>
      </ButtonBox>
    </Modal>
  )
}