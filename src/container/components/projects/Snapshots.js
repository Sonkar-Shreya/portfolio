import React from "react";
import {
    TeamCarousel,
    TeamCarouselItem
} from "../";
const Snapshots = ({ color = 'gray', snapshots = [] }) => {
    console.log('snapshots', snapshots)
    return (
        <div className="md:p-16 p-5 sm:mt-0 min-h-screen">
            <div className='lg:w-8/12 mx-auto'>
                <h2 className='text-2xl md:text-5xl font-Juana py-3'> Snapshots </h2>
            </div>
            <div className="w-full lg:pt-16">
                <TeamCarousel width={'7'}>
                    {
                        snapshots.map((img, ind = 0) => (
                            <TeamCarouselItem key={'image_snapshot_' + ind} width='1000' height={96} >
                                <div className={`bg-${color}-200 p-2 rounded-lg flex`} style={{width: '1000px'}}>
                                    <img className={`rounded-lg`} src={img.image} />
                                </div>
                            </TeamCarouselItem>
                        ))
                    }
                </TeamCarousel>
            </div>
        </div>
    )
}

export default Snapshots