import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';

export default function ImagesModal({
  modalIsOpen,
  closeModal,
  selectedImageIndex,
  jsonImages
}) {

  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: '1000'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: 'none',
      width: 'auto',
      height: 'auto',
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
        <ImageGallery
          items={jsonImages}
          showNav={true}
          showBullets={true}
          showFullscreenButton={true}
          startIndex={selectedImageIndex}
          slideDuration={0}
          lazyLoad={true}
        />
      </Modal>
    </div>
  )
}