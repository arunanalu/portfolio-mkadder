import NextImage from "next/image";
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineLoading, AiOutlineClose } from "react-icons/ai";
import Lightbox from "react-spring-lightbox";

export default function ImagesGrid({ imagesUrls }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
    imagesUrls.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    })
  }, [])

  return (
    <div>
      {
        !imagesUrls && (
          <AiOutlineLoading size="3em" className="mt-[100px] animate-spin m-auto" />
        )
      }
      {
        imagesUrls && (
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
                config: { mass: 1, tension: 820, friction: 32 }
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
