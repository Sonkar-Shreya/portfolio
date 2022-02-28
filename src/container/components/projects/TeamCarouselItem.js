const TeamCarouselItem = ({children, width, isActive, height=96}) => {

    return(
        <div className={'team-carousel-item duration-400 easeInOut h-'+ height + ' ' + (isActive ? ' scale-100 z-10' : ' -z-50 scale-90 opacity-50')} style={{width: width}}>
            {children}
        </div>
    )
}

export default TeamCarouselItem