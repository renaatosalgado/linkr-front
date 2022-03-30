import Modal from 'react-modal'
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { CancelButton, ConfirmButton, ModalText, ButtonBox } from '../DeleteModal/style';
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
export default function RepostModal({openRepostModal, setOpenRepostModal, postId }){
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false)

  async function handleRepost(){
    setLoading(true)
    try {
      await api.rePost(postId, auth?.token) 
      setLoading(false)
      setOpenRepostModal(false)
      window.location.reload()
    } catch (error) {
      console.log(error)
      setLoading(false)
      setOpenRepostModal(false)
      alert("It wasn't possible to repost the post.")
    }
  }


  return (
    <Modal 
    isOpen={openRepostModal}
    onRequestClose={() => {if(!loading)setOpenRepostModal(false)}}
    style={customStyles}>
    {loading ? <RotatingLines width='200' /> : 
      <>
        <ModalText>Do you want to re-post <br/> this link?</ModalText>
        <ButtonBox>
          <CancelButton onClick={() => setOpenRepostModal(false)} >No, cancel</CancelButton>
          <ConfirmButton onClick={handleRepost}>Yes, share!</ConfirmButton>
        </ButtonBox>
      </>}
    </Modal>
  )
}