import Modal from 'react-modal'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('.root');
export default function DeleteModal({openModal, setOpenModal}){
  let subtitle

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  return (
    <Modal isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setOpenModal(false)}
        style={customStyles}
        contentLabel="Example Modal">
      <h2>Gostaria de deletar o post?</h2>
      <button>Confirm</button>
      <button>Cancel</button>
    </Modal>
  )
}