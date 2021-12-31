import React from 'react'
import {
  FullScreen,
  SnapElement,
  ContactSection,
  NameSection,
  ProjectSection,
  TechStackSection,
  Footer,
} from '../components'

const Landing = () => {
  return (
    <FullScreen>
      <SnapElement> <NameSection /> </SnapElement>
      <SnapElement> <TechStackSection /> </SnapElement>
      <SnapElement> <ProjectSection /> </SnapElement>
      <SnapElement> <ContactSection /> </SnapElement>
    </FullScreen>
  )
}

export default Landing
