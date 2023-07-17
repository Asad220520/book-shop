import React from 'react'
import OurBokshop from './OurBookshop'
import Genres from './Genres'
import NewBooks from './NewBooks'
import Books from '../Books'
import AboutUs from '../AboutUs'

const HomePage = () => {
  window.scrollTo(0, 0);
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