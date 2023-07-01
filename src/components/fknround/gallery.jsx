import React from 'react'

import GalleryCard2 from './gallery-card2'

const Gallery = (props) => {
  return (
    <>
      <div className="gallery-gallery">
        <div className="gallery-container">
          <div className="gallery-container1">
            <div className="gallery-container2">
              <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
            </div>
            <div className="gallery-container3">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className="gallery-container4">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className="gallery-container5">
          <GalleryCard2
            image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery {
            width: 100%;
            height: 1000px;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .gallery-container {
            flex: 3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery-container1 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .gallery-container2 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-container3 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-container4 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .gallery-container5 {
            flex: 2;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .gallery-container5 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .gallery-gallery {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .gallery-container1 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .gallery-container {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Gallery
