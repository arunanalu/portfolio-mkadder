import Image from "next/image";
import { useEffect, useState } from 'react';
import ImagesModal from "./ImagesModal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ImagesGrid() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imagesUrls, setImagesUrls] = useState([]);

  console.log('imagesUrls', imagesUrls)

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
      setImagesUrls(imagesUrls)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (imagesUrls.length !== 0) {
      overridMansoryCss()
    }
  }, [imagesUrls])

  function overridMansoryCss() {
    const mansory = document.querySelector('.mansory-ct')
    const firstChild = mansory.children[0]
    firstChild.style.alignItems = 'center'
  }

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
                      <Image
                        src={image.original}
                        alt={image.name}
                        width={400}
                        height={400}
                        className="rounded-lg"
                        onClick={() => handleImageClick(index)}
                        priority={true}
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

  // aqui em baixo
}