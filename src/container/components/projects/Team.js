import React from "react";
import { 
    TeamCarousel, 
    TeamCarouselItem
} from "../";
import { TechIcons } from "../../../constants/icons";

const Team = ({ className = '', teamMembers = [], color = 'red' }) => {
    /*
    {
        name: 'Akash Madhesiya',
        image: '',
        role: '',
        links: {
            linkedIn: '',
            github: '',
        }
    }
    */
    return (
        <div className={`h-screen p-5 md:p-16 ${className}`}>
            <h2 className='text-2xl md:text-5xl font-Juana py-3 text-center pb-3'>Our Team</h2>

            <div className="pt-3 w-full">
                <TeamCarousel>
                   {
                       teamMembers.map((banda, index) => {
                           return (
                            <TeamCarouselItem key={'teamMember_' + index++}>
                                <div className="h-full grid grid-cols-2 w-full mx-3">
                                    {/* left side, image */}
                                    <div className="h-full bg-red-400 w-60">
                                        <img className="object-cover h-full rounded-lg" src={banda.image} />
                                    </div>

                                    {/* right side, details */}
                                    <div className="ml-12 mt-20 tracking-wider">
                                        <p className={'uppercase text-xs font-Juana font-semibold'}>{banda.role}</p>
                                        <p className="my-3 text-2xl">{banda.name}</p>
                                        <div className="flex items-center justify-start">
                                            <a href={banda.links.linkedIn} className={'rounded-full bg-sky-200 hover:bg-sky-300 easeInOut duration-300'}> <TechIcons.LinkedIn width={8} className={'p-2'} /> </a>
                                            <a href={banda.links.github} className={"rounded-full ml-2 bg-purple-200 hover:bg-purple-300 easeInOut duration-300"}> <TechIcons.GitHub width={8} className={'p-2'} /> </a>
                                        </div>
                                    </div>
                                </div>
                            </TeamCarouselItem>
                           )
                       })
                   }
                </TeamCarousel>
            </div>
        </div>
    )
}

export default Team