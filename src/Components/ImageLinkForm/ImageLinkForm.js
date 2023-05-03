import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,OnButtonSummit}) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='flex center'>
        <div className='form center pa4 br3 shadow-5 flex'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
            <button className='w-30 grow f4 link ba ph3 pv2 dib white bg-light-purple b--white' onClick={OnButtonSummit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm                                    