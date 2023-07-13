import React from 'react'
import OurBokshop from './OurBookshop'
import Genres from './Genres'
import NewBooks from './NewBooks'
import Books from '../Books'
import AboutUs from '../AboutUs'

const HomePage = () => {
  return (
    <div>
      <OurBokshop/>
      <Genres/>
      <NewBooks/>
      <Books/>
      <AboutUs/>
    </div>
  )
}

export default HomePage