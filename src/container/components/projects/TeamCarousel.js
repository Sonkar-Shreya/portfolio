import React, { useEffect, useState } from 'react'
import './carousel.css'
import {
    ArrowIcons
} from '../../../constants/icons'

const TeamCarousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const childrenCount = React.Children.count(children)

    const updateIndex = (newIndex) => {
        newIndex = (newIndex < 0 ? childrenCount - 1 : newIndex % childrenCount)
        setActiveIndex(newIndex)
    }

    const iconsStyle = 'mt-5 flex w-12 h-12 p-3 items-center z-10 rounded-full bg-orange-100 mx-2 hover:bg-orange-300 cursor-pointer'
    return (
        <div className='w-full relative'>
            <div className='w-4/12 mx-auto md:my-10'>
                <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {
                        React.Children.map(children, (child, index) => {
                            let isActive = index === activeIndex;
                            let width = isActive ? '100%' : '100%'
                            return React.cloneElement(child, { width: width, isActive: isActive })
                        })
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <div
                    onClick={() => updateIndex(activeIndex - 1)}
                    className={iconsStyle}
                >
                    <ArrowIcons.LeftArrow />
                </div>
                <div
                    onClick={() => updateIndex(activeIndex + 1)}
                    className={iconsStyle}
                >
                    <ArrowIcons.RightArrow />
                </div>
            </div>
        </div>
    )
}

export default TeamCarousel;