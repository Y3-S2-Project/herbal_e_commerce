import React, { useState, useRef } from 'react'
import { imageUpload, removeImage } from '../../../utils/imagesFunctions'

const ImageUploadForm = ({ setFormData }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG or GIF)')
    } else if (file.size > 1048576) {
      setError('The selected file is too large (max. 1MB)')
    } else {
      setSelectedFile(file)
      setError('')
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const handleUpload = async () => {
    if (!selectedFile) {
      return
    }
    imageUpload(selectedFile ,"itemsImages")
      .then((imageUrl) => {
        // push the imageUrl to the imageUrl array
        setFormData((prevState) => ({
          ...prevState,
          imageUrl: [...prevState.imageUrl, imageUrl],
        }))
        console.log(imageUrl)
        setSelectedFile(null)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleImageRemove = (imageUrl) => {
    // Remove the image from Firebase Storage
    removeImage(imageUrl)
      .then(
        // Remove the imageUrl from the formData
        setFormData((prevState) => ({
          ...prevState,
          imageUrl: prevState.imageUrl.filter((url) => url !== imageUrl),
        })),
        console.log('Image removed from Firebase Storage'),
      )
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        type="file"
        onChange={handleFileSelect}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <div style={{ cursor: 'pointer' }} onClick={handleButtonClick}>
        {selectedFile ? (
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Selected file"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="blue"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="square"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        )}
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {selectedFile && <button onClick={handleUpload}>Upload Image</button>}
    </div>
  )
}

export default ImageUploadForm
