import Image from 'next/image'
import { Inter } from 'next/font/google'
import Modal from 'react-modal';
import { useState } from 'react';
import ImageGallery from 'react-image-gallery';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  function handleImageClick(index) {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const jsonImages = {
    "images": [
      {
        "id": 1,
        "name": "image1",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      },
      {
        "id": 2,
        "name": "image2",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      }, 
      {
        "id": 3,
        "name": "image2",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      }, 
      {
        "id": 4,
        "name": "image2",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      }, 
      {
        "id": 5,
        "name": "image2",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      }, 
      {
        "id": 6,
        "name": "image2",
        "original": "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
      },
    ]
  }

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
      height: 'auto'
    }
  };

  return (
    <main className="">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
        style={modalStyle}
        shouldFocusAfterRender={true}
      >
        <ImageGallery
          items={jsonImages.images}
          showNav={true}
          showBullets={true}
          showFullscreenButton={true}
          startIndex={selectedImageIndex}
          slideDuration={0}
        />
      </Modal>
      <div className='flex flex-col justify-center items-center'>
        <div className="border-4 border-green-900 grid grid-cols-3 justify-items-center align-items-center gap-6">
          {
            jsonImages.images.map((image, index) => (
              <div key={image.id}
                className="border-4 border-red-900 relative w-[500px] h-[500px]"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.original }
                  alt={image.name}
                  className="border-4 border-yellow-900 absolute"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}
