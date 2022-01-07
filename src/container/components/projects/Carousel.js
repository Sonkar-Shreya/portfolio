import React, { useEffect, useState } from 'react'
import './carousel.css'
import {
    ArrowIcons
} from '../../../constants/icons'

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const childrenCount = React.Children.count(children)

    const updateIndex = (newIndex) => {
        newIndex = (newIndex < 0 ? childrenCount - 1 : newIndex % childrenCount)
        setActiveIndex(newIndex)
    }

    return (
        <div className='w-full relative'>
            <div className='overflow-hidden w-7/12 mx-auto'>
                <div className='inner' style={{transform: `translateX(-${activeIndex*100}%)`}}>
                    {
                        React.Children.map(children, (child, index) => {
                            return React.cloneElement(child, {width: '100%'})
                        })
                    }
                </div>
            </div>
            <div 
                onClick={() => updateIndex(activeIndex + 1)} 
                className='absolute top-1/3 right-20 mt-5 flex w-24 h-16 items-center z-10'
            >
                <ArrowIcons.RightArrow />
            </div>
            <div 
                onClick={() => updateIndex(activeIndex - 1)} 
                className='absolute top-1/3 left-20 mt-5 flex w-24 h-16 items-center z-10'
            >
                    <ArrowIcons.LeftArrow />
            </div>
        </div>
    )
}

export default Carousel;