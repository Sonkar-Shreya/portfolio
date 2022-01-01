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
      <SnapElement id='nameSection' > <NameSection /> </SnapElement>
      <SnapElement id='techStackSection' > <TechStackSection /> </SnapElement>
      <SnapElement id='projectSection' > <ProjectSection /> </SnapElement>
      <SnapElement id='contactSection' > <ContactSection /> </SnapElement>
    </FullScreen>
  )
}

export default Landing
