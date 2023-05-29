import NextImage from "next/image";
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AiOutlineLoading } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";
import { Zoom } from "yet-another-react-lightbox/plugins";

export default function ImagesGrid({ imagesUrls }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  function handleImageClick(index) {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  }

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
              open={modalIsOpen}
              close={() => setModalIsOpen(false)}
              slides={imagesUrls}
              render={{ slide: NextJsImage }}
              index={selectedImageIndex}
              controller={{
                closeOnBackdropClick: true,
              }}
              plugins={[Zoom]}
              animation={{ 
                fade: 200,
                swap: 200,
                navigation: 200
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
