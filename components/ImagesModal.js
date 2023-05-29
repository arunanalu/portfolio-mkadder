import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import { AiOutlineClose } from "react-icons/ai";

export default function ImagesModal({
  modalIsOpen,
  closeModal,
  selectedImageIndex,
  jsonImages
}) {

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '10px',
      border: 'none',
      width: 'auto',
      height: 'auto',
      overflow: 'visible',
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
        style={modalStyle}
        shouldFocusAfterRender={true}
        ariaHideApp={false}
      >
        <button 
          onClick={closeModal}
          className='absolute flex items-center justify-center z-10 w-8 h-8 top-[0px] right-[0px] bg-gradient-to-br from-purple-700 to-pink-700 rounded'>
          <AiOutlineClose />
        </button>
        <ImageGallery
          items={jsonImages}
          showNav={true}
          showBullets={true}
          showFullscreenButton={true}
          startIndex={selectedImageIndex}
          slideDuration={0}
        />
      </Modal>
    </div>
  )
}