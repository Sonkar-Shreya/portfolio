import {
    TechIcons
} from './icons'

import {
    I1,
    I2,
    I3,
    I4,
    I5,
    
    shreyaSonkar,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
    g9,
    g10,
    g11,
    I6,
    I7,
    // I8,
} from './images'

const comingSoon = "coming soon..."

const technologies = {
    Javascript: [
        { 
            title: 'React', 
            icon: TechIcons.ReactNativeIcon,
            hoverShadow: 'sky'
        },
        // { 
        //     title: 'React Native', 
        //     icon: TechIcons.ReactNativeIcon,
        //     hoverShadow: 'sky'
        // },
        { 
            title: '', 
            icon: TechIcons.NodeIcon,
            hoverShadow: 'green'
        },
        { 
            title: 'Jquery', 
            icon: TechIcons.JqueryIcon,
            hoverShadow: 'sky'
        }
    ],
    Backend: [
        { 
            title: '', 
            icon: TechIcons.MySQLIcon,
            hoverShadow: 'sky'
        },
        { 
            title: 'MongoDB', 
            icon: TechIcons.MongoDBIcon,
            hoverShadow: 'green'
        },
        // { 
        //     title: 'Firebase', 
        //     icon: TechIcons.FirebaseIcon,
        //     hoverShadow: 'yellow'
        // }
    ],
    Styling: [
        // { title: 'CSS', icon: TechIcons.CSSIcon },
        { 
            title: 'TailwindCSS', 
            icon: TechIcons.TailwindCssIcon,
            hoverShadow: 'sky'
        },
        { 
            title: 'Bootstrap', 
            icon: TechIcons.BootstrapIcon,
            hoverShadow: 'purple'
        },
        // { 
        //     title: 'MaterialUI', 
        //     icon: TechIcons.MaterialUIIcon,
        //     hoverShadow: 'sky'
        // },
        // { 
        //     title: 'ReactStrap', 
        //     icon: TechIcons.ReactStrapIcon,
        //     hoverShadow: 'purple'
        // }
    ],
    Others: [
        { 
            title: 'Git & Github', 
            icon: TechIcons.GitIcon,
            hoverShadow: 'purple'
        },
        { 
            title: 'Herkou', 
            icon: TechIcons.HerokuIcon,
            hoverShadow: 'purple'
        },
        { 
            title: 'Gitlab', 
            icon: TechIcons.GitLabIcon,
            hoverShadow: 'red'
        }
    ]
}

const projects = {
    guestTracker: {
        about: 'Baad m likh dege',
        appType: 'Web App',
        description:"to track the guest activities in hotel",
        title: 'Hospitality Management',
        techUsed: ['React', 'Redux', 'MySQL'],
        image: {
            banner: '',
            snapshots: [
                // {
                //     title: '',
                //     description: '',
                //     image: kishori4
                // },
                {
                    title: '',
                    description: '',
                    image: g1
                },
                {
                    title: '',
                    description: '',
                    image: g2
                },
                {
                    title: '',
                    description: '',
                    image: g3
                },
                {
                    title: '',
                    description: '',
                    image: g4
                },
                {
                    title: '',
                    description: '',
                    image: g5
                },
                {
                    title: '',
                    description: '',
                    image: g6
                },
                {
                    title: '',
                    description: '',
                    image: g7
                },
                {
                    title: '',
                    description: '',
                    image: g8
                },
                {
                    title: '',
                    description: '',
                    image: g9
                },
                {
                    title: '',
                    description: '',
                    image: g10
                },
                {
                    title: '',
                    description: '',
                    image: g11
                },
            ],
        },
        links: {
            github: 'https://github.com/Sonkar-Shreya/client-guest-tracker-hospitality-mngmt',
            // live: '',
            // playstore: '',
            // ios: '',
        },
        style: {
            color: 'purple',
            shape: 'circle',
        },
        team: [
            {
                name: 'Shreya Sonkar',
                image: shreyaSonkar,
                role: 'backend developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/shreya-sonkar-0476891a5/',
                    github: 'https://github.com/Sonkar-Shreya',
                }
            },
            {
                name: 'Shivesh Tiwari',
                image: 'https://media-exp1.licdn.com/dms/image/C5603AQGgYJXBPQ0DWg/profile-displayphoto-shrink_400_400/0/1621507333133?e=1647475200&v=beta&t=t7_iC0vRNIgnz99dultQKNCXQVUrrhIDUokevBzg2dU',
                role: 'frontend developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/shivesh-tiwari-21bbb0190/',
                    github: 'https://github.com/algomonk016',
                }
            },
        ],
       
        timeline: {
            start: '2021',
            end: '',
            onGoing: true
        },
    },
    parijana: {
        about: 'Everything will be here',
        appType: 'Web & Mobile App',
        description:"Parijana-Papers is a website that contains previous year papers of Chhatrapati Shahu Ji Maharaj University, Kanpur. Due to lockdown period, the interaction between the college-mates has reduced to a large extinct due to which sharing of important notes and previous year papers has also reduced. Most of the studen don't get the papers. So to resolve that problem, this website is developed. It contains all the previous year papers for the students so that they can easily get those papers.",
        title: 'Parijana Papers',
        techUsed: ['React', 'React Native', 'Redux', 'NodeJs + ExpressJS', 'MySQL'],
        image: {
            //banner: ,
            snapshots: [
                {
                    title: 'Landing Page',
                    description: '',
                    image: I1,
                },
                {
                    title: 'Page 2',
                    description: '',
                    image: I2,
                },
                {
                    title: 'Page 3',
                    description: '',
                    image: I3,
                },
                {
                    title: 'Page 4',
                    description: '',
                    image: I4,
                },
                {
                    title: 'Page 5',
                    description: '',
                    image: I5,
                },
                {
                    title: 'Page 5',
                    description: '',
                    image: I6,
                },
                {
                    title: 'Page 5',
                    description: '',
                    image: I7,
                },
                // {
                //     title: 'Page 5',
                //     description: '',
                //     image: I8,
                // },
            ],
        },
        links: {
            github: 'https://github.com/algomonk016/Parijana-Papers',
            live: 'https://parijana.herokuapp.com/college',
            playstore: '',
            ios: '',
        },
        style: {
            color: 'purple',
            shape: 'square',
        },
        team: [
            {
                name: 'Shreya Sonkar',
                image: shreyaSonkar,
                role: 'backend developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/shreya-sonkar-0476891a5/',
                    github: 'https://github.com/Sonkar-Shreya',
                }
            },
            {
                name: 'Shivesh Tiwari',
                image: 'https://media-exp1.licdn.com/dms/image/C5603AQGgYJXBPQ0DWg/profile-displayphoto-shrink_400_400/0/1621507333133?e=1647475200&v=beta&t=t7_iC0vRNIgnz99dultQKNCXQVUrrhIDUokevBzg2dU',
                role: 'frontend developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/shivesh-tiwari-21bbb0190/',
                    github: 'https://github.com/algomonk016',
                }
            },
        ],
        timeline: {
            start: '2021',
            end: '2021',
            onGoing: false
        },
    },
}

export default {
    technologies,
    projects
}