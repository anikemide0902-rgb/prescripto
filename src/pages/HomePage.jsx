import React from 'react'
import "./HomePage.css"
import HeroComponent from '../components/HeroComponent'
import FindBySpeciality from '../components/FindBySpeciality'
import TopDoctors from '../components/TopDoctors'
import FooterComponent from '../components/FooterComponent'
import AppointmentComponent from '../components/AppointmentComponent'


const HomePage = () => {
  return (
      <div className='home-page'>
          <HeroComponent /> 
          <FindBySpeciality />
          <TopDoctors/>
          <AppointmentComponent/>
          <FooterComponent/>
    </div>
  )
}

export default HomePage