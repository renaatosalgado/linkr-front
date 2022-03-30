import Modal from 'react-modal'
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { CancelButton, ConfirmButton, ModalText, ButtonBox } from './style';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react'

const customStyles = {
  overlay: {zIndex: 1000},
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
export default function DeleteModal({openDeleteModal, setOpenDeleteModal, postId }){
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false)

  async function deletePost(){
    setLoading(true)
    try {
      await api.deletePost(postId, auth?.token) 
      setLoading(false)
      setOpenDeleteModal(false)
      window.location.reload()
    } catch (error) {
      console.log(error)
      setLoading(false)
      setOpenDeleteModal(false)
      alert("It wasn't possible to delete post.")
    }
  }


  return (
    <Modal 
    isOpen={openDeleteModal}
    onRequestClose={() => {if(!loading)setOpenDeleteModal(false)}}
    style={customStyles}>
    {loading ? <RotatingLines width='200' /> : 
      <>
        <ModalText>Are you sure you want <br/> to delete this post?</ModalText>
        <ButtonBox>
          <CancelButton onClick={() => setOpenDeleteModal(false)} >No, go back</CancelButton>
          <ConfirmButton onClick={deletePost}>Yes, delete it</ConfirmButton>
        </ButtonBox>
      </>}
    </Modal>
  )
}