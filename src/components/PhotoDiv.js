import React from 'react'

const PhotoDiv = (props) => {
  return (
    <div className='photoDiv'>
      <img src={props.url} alt='' />
    </div>
  )
}

export default PhotoDiv
