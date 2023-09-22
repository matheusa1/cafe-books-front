'use client'

import React, { ReactElement } from 'react'

const presetUpload = process.env.NEXT_PUBLIC_PRESET_UPLOAD

const Hot: React.FC = (): ReactElement => {
  const onHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    formData.append('upload_preset', presetUpload ? presetUpload : '')
    const data = Object.fromEntries(formData)
    console.log(data)
    console.log(presetUpload)

    // try {
    //   const res = await axios.post(
    //     'https://api.cloudinary.com/v1_1/dkwt60tnl/image/upload',
    //     formData,
    //   )

    //   console.log(res)
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <form className={''} onSubmit={onHandleSubmit}>
      <input type="file" name="file" />
      <button className="bg-red-500 p-2 text-white">Upload</button>
    </form>
  )
}

export default Hot
