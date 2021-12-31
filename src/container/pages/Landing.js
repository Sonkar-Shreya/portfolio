import React from 'react'
import {
  FullScreen,
  SnapElement
} from '../components'

const Landing = () => {
  return (
    <FullScreen>
      <SnapElement> this is first snap </SnapElement>
      <SnapElement> this is second snap </SnapElement>
      <SnapElement> this is third snap </SnapElement>
    </FullScreen>
  )
}

export default Landing
