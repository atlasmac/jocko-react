import React from 'react'
import PhotoDiv from './PhotoDiv'
import photo1 from '../images/boardPhoto1.JPG'
import photo2 from '../images/boardPhoto2.JPG'
import photo3 from '../images/boardPhoto3.JPG'
import photo4 from '../images/boardPhoto4.JPG'
import shaping1 from '../images/shapingClose.JPG'
import shaping2 from '../images/shape1.JPG'
import shaping3 from '../images/shape2.JPG'
import shaping4 from '../images/shape3.JPG'
import shaping5 from '../images/shape4.JPG'
import surfing1 from '../images/surfing1.jpeg'
import surfing2 from '../images/surfing2.jpeg'




const Gallery = () => {
  const [scroll, setScroll] = React.useState(false)

  function hoverHandle() {
    setScroll(true)
  }
  function hoverLeave() {
    setScroll(false)
  }

  const galleryUrls = [photo4, surfing2, photo2, shaping1, photo1, surfing1, shaping2, shaping3, shaping4, photo3, shaping5]
  const gallery = galleryUrls.map((photo, i, arr) => {
    return (
      <PhotoDiv
        key={i}
        url={photo}
      />
    )
  })
  return (
    <div id='gallery' className='gallery'>
      <section className={`galleryPhotos  ${scroll ? 'galleryPhotosScroll' : ''}`}
        onMouseEnter={hoverHandle}
        onMouseLeave={hoverLeave}
        onTouchStart={hoverHandle}
      >
        {gallery}
        <div></div>
      </section>
    </div>

  )
}

export default Gallery
