import React from 'react'
import {
  FullScreen,
  SnapElement,
  ContactSection,
  NameSection,
  ProjectSection,
  TechStackSection,
  Footer,
  Navbar
} from '../components'

const Landing = () => {
  return (
    <FullScreen>
      <Navbar />
      <SnapElement id='home' > <NameSection /> </SnapElement>
      <SnapElement id='skills' > <TechStackSection /> </SnapElement>
      <SnapElement id='projects' > <ProjectSection /> </SnapElement>
      <SnapElement id='contact' > <ContactSection /> </SnapElement>
    </FullScreen>
  )
}

export default Landing
