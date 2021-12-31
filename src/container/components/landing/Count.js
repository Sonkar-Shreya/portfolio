// import React from 'react'
// import CountUp from 'react-countup'
// import VisibilitySensor from 'react-visibility-sensor'
// import { Container } from 'reactstrap'
// import Heading from './Heading'

// const Count = ({
//     start = 0,
//     end = 100,
//     duration = 2,
//     prefix = '',
//     styleClasses=''
// }) => {

//     const counter = <CountUp
//         start={start}
//         end={end}
//         duration={duration}
//         prefix={prefix}
//         className={styleClasses}
//     />

//         return (
//             <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
//                 {
//                     ({ isVisible }) => (
//                         <Container style={{ height: 100 }}>
//                             {
//                                 isVisible ? <Heading hSize='3' hClasses='' text={counter} /> : null
//                             }
//                         </Container>
//                     )
//                 }
//             </VisibilitySensor>

//         )
// }

// export default Count
