import React from 'react'

export default function Flexer({language, setLanguage, languages, translate}) {
  return (
    <div key='flexer-screen' className='flex w-screen h-screen overflow-y-auto print:h-auto text-text items-center justify-center text-7xl'>Flexer</div>
  )
}