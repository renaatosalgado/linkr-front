import Modal from 'react-modal'
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { CancelButton, ConfirmButton, ModalText, ButtonBox } from './style';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react'

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
    alignItems: 'center',
  },
};

Modal.setAppElement('.root');
export default function DeleteModal({openModal, setOpenModal, postId }){
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false)

  async function deletePost(){
    setLoading(true)
    try {
      await api.deletePost(postId, auth?.token) 
      setLoading(false)
      setOpenModal(false)
      window.location.reload()
    } catch (error) {
      console.log(error)
      setLoading(false)
      setOpenModal(false)
      alert("It wasn't possible to delete post.")
    }
  }


  return (
    <Modal 
    isOpen={openModal}
    onRequestClose={() => {if(!loading)setOpenModal(false)}}
    style={customStyles}>
    {loading ? <RotatingLines width='200' /> : 
      <>
        <ModalText>Are you sure you want to delete this post?</ModalText>
        <ButtonBox>
          <CancelButton onClick={() => setOpenModal(false)} >No, go back</CancelButton>
          <ConfirmButton onClick={deletePost}>Yes, delete it</ConfirmButton>
        </ButtonBox>
      </>}
    </Modal>
  )
}