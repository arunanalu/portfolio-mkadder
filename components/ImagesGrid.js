import NextImage from "next/image";
import { useEffect, useState } from 'react';
import ImagesModal from "./ImagesModal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineLoading, AiOutlineClose } from "react-icons/ai";
import Lightbox from "react-spring-lightbox";

export default function ImagesGrid() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imagesUrls, setImagesUrls] = useState([]);

  function handleImageClick(index) {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const gotoPrevious = () =>
    selectedImageIndex > 0 && setSelectedImageIndex(selectedImageIndex - 1);

  const gotoNext = () =>
    selectedImageIndex + 1 < imagesUrls.length &&
    setSelectedImageIndex(selectedImageIndex + 1);

  useEffect(() => {
    async function fetchData() {
      let dataImages = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: 10, offset: 0 })
      })
      dataImages = await dataImages.json()
      const imagesUrls = dataImages.items.map((item) => {
        const img = new Image()
        img.src = `${process.env.NEXT_PUBLIC_API_URL}/api${item.url}/`
        return {
          id: item.id,
          alt: item.file_name,
          src: `${process.env.NEXT_PUBLIC_API_URL}/api${item.url}/`,
        }
      })
      setImagesUrls(imagesUrls)
    }
    fetchData()
  }, [])

  return (
    <div>
      {
        imagesUrls.length === 0 && (
          <AiOutlineLoading size="3em" className="mt-[100px] animate-spin m-auto" />
        )
      }
      {
        imagesUrls.length !== 0 && (
          <div>
            <Lightbox 
              isOpen={modalIsOpen}
              onPrev={gotoPrevious}
              onNext={gotoNext}
              onClose={closeModal}
              images={imagesUrls}
              currentIndex={selectedImageIndex}
              renderImageOverlay={() => (
                <button 
                  onClick={closeModal}
                  className='noSelect cursor-pointer absolute flex items-center justify-center z-10 w-8 h-8 top-[0px] right-[0px] bg-gradient-to-br from-purple-700 to-pink-700 rounded-bl-lg'
                >
                  <AiOutlineClose />
                </button>
              )}
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
              }}
              pageTransitionConfig={{
                from: { transform: "scale(1)", opacity: 0 },
                enter: { transform: "scale(1)", opacity: 1 },
                leave: { transform: "scale(1)", opacity: 0 },
                config: { mass: 1, tension: 520, friction: 32 }
              }}
            />
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1050: 3 }}
            >
              <Masonry
                className="mansory-ct"
                gutter="10px"
              >
                {
                  imagesUrls.map((image, index) => (
                    <div key={image.id} className="noSelect relative cursor-pointer select-none">
                      <NextImage
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="rounded-lg"
                        onClick={() => handleImageClick(index)}
                        // placeholder="blur"
                        // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0/w8AAZMBSGia0bUAAAAASUVORK5CYII="
                      />
                    </div>
                  ))
                }
              </Masonry>
            </ResponsiveMasonry>
        </div>
        )
      }
    </div>
  )
}