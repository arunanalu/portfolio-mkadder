import NextImage from "next/image";
import { useEffect, useState } from 'react';
import ImagesModal from "./ImagesModal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
      const imagesUrls = dataImages.items.map(item => {
        return {
          id: item.id,
          name: item.file_name,
          original: `${process.env.NEXT_PUBLIC_API_URL}/api${item.url}/`,
        }
      })
      // preload images from imagesUrls array in the browser
      imagesUrls.forEach(image => {
        const img = new Image()
        img.src = image.original
      })
      setImagesUrls(imagesUrls)
    }
    fetchData()
  }, [])

  return (
    <div>
      {
        imagesUrls.length !== 0 && (
          <div>
            <ImagesModal
              modalIsOpen={modalIsOpen} 
              closeModal={closeModal}
              selectedImageIndex={selectedImageIndex}
              jsonImages={imagesUrls}
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
                    <div key={image.id} className="relative">
                      <NextImage
                        src={image.original}
                        alt={image.name}
                        width={400}
                        height={400}
                        className="rounded-lg"
                        onClick={() => handleImageClick(index)}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0/w8AAZMBSGia0bUAAAAASUVORK5CYII="
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