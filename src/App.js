import { useMediaQuery } from '@mui/material'
import {motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import MobileLanding from './components/mobileLanding'


const App = () => {
  const isTablet = useMediaQuery('(min-width: 500px )')


  return (
    <div >

      {
        isTablet? null :
        <MobileLanding/>
      }
     
      
    </div>
  )
}

export default App
