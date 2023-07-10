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
                image_src="/assets/pics/new-construction.jpg"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className="gallery-container4">
            <GalleryCard2
              image_src="/assets/pics/finishedroof.webp"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className="gallery-container5">
          <GalleryCard2
            image_src="/assets/pics/repair2.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery {
            width: 100%;
            height: 50vh;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: 1rem;
            padding-bottom: 1rem;
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
              height: auto;
            }
            .gallery-container5 {
              display: none;
              }
          }
          @media (max-width: 479px) {
            .gallery-gallery {
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
