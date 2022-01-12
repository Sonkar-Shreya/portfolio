import {
    TechIcons
} from './icons'

const technologies = {
    Javascript: [
        { 
            title: 'React', 
            icon: TechIcons.ReactNativeIcon,
            hoverShadow: 'sky'
        },
        { 
            title: 'React Native', 
            icon: TechIcons.ReactNativeIcon,
            hoverShadow: 'sky'
        },
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
        { 
            title: 'Firebase', 
            icon: TechIcons.FirebaseIcon,
            hoverShadow: 'yellow'
        }
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
        { 
            title: 'MaterialUI', 
            icon: TechIcons.MaterialUIIcon,
            hoverShadow: 'sky'
        },
        { 
            title: 'ReactStrap', 
            icon: TechIcons.ReactStrapIcon,
            hoverShadow: 'purple'
        }
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
    kishori: {
        about: 'Pratham, Prabal, Sarvada',
        appType: 'Web & Mobile App',
        title: 'Kishori',
        techUsed: ['Java', 'React', 'React Native', 'Firebase'],
        image: {
            banner: '',
            snapshots: [
                {
                    title: '',
                    description: '',
                    image: ''
                }
            ],
        },
        links: {
            github: '',
            live: '',
            playstore: '',
            ios: '',
        },
        style: {
            color: 'pink',
            shape: 'circle',
        },
        team: [
            {
                name: 'Akash Madhesiya',
                image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEVq0VTGNP8kw/profile-displayphoto-shrink_400_400/0/1638378796601?e=1647475200&v=beta&t=St3Zvx9IozKex69LabTjU79jOPe_ag1DQbruEizJPts',
                role: 'Developer Lead',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/akash-madheshiya-7741111a3/',
                    github: 'https://github.com/semiexp07',
                }
            },
            {
                name: 'Suryansh Pratap Singh',
                image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFtb2Eo6aLvNA/profile-displayphoto-shrink_400_400/0/1634583648391?e=1647475200&v=beta&t=77GYMHcFD55sibo_EdXZMIQu-6sparbuI9Xizvz8Hqc',
                role: 'Tech lead',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/suryanshpratapsingh-72659a195/',
                    github: 'https://github.com/Suryansh26',
                }
            },
            {
                name: 'Yaman Kain',
                image: '',
                role: 'UI Designer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/yaman-kain-256a19166/',
                    github: '',
                }
            },
            {
                name: 'Vibhanshu Pandey',
                image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGSebfCa8sVnQ/profile-displayphoto-shrink_400_400/0/1631733443923?e=1647475200&v=beta&t=84G0XxEKNGZ8naldvh5vwciFhtjhRhHtjaeoMEw1pas',
                role: 'developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/vibhanshu-pandey-7a35b11b4/',
                    github: 'https://github.com/ivibhu05',
                }
            },
            {
                name: 'Dheeraj Pandey',
                image: 'https://media-exp1.licdn.com/dms/image/C5603AQFnHPM3qyJ8PQ/profile-displayphoto-shrink_400_400/0/1641497580735?e=1647475200&v=beta&t=DZ-c_Tadh6crCF-hVxV1PZZWaqx39XDPocp4QcmnJTI',
                role: 'developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/dheerajpandey1/',
                    github: 'https://github.com/dcpandey1',
                }
            },
            {
                name: 'Shivani Chaudhray',
                image: 'https://media-exp1.licdn.com/dms/image/C5603AQGlX6yA2Bfrdw/profile-displayphoto-shrink_400_400/0/1626727904713?e=1647475200&v=beta&t=P8qaKCndAdQU9OFKAGoxFCS5Z7dx3tB-WApq1yv8GKQ',
                role: 'developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/shivani-chaudhary-3a15301b4/',   
                    github: 'https://github.com/Shivaniii26',
                }
            },
            {
                name: 'Noor Siddique',
                image: 'https://media-exp1.licdn.com/dms/image/C4D03AQGArf9zxEKzpg/profile-displayphoto-shrink_800_800/0/1627932267572?e=1647475200&v=beta&t=pPzAumYCnFUYxfv9j4_t5DeWCllYEvoFWSwvkDV_da8',
                role: 'developer',
                links: {
                    linkedIn: 'https://www.linkedin.com/in/noor-siddiqui/',
                    github: '',
                }
            },
            {
                name: 'Shivesh Tiwari',
                image: 'https://media-exp1.licdn.com/dms/image/C5603AQGgYJXBPQ0DWg/profile-displayphoto-shrink_400_400/0/1621507333133?e=1647475200&v=beta&t=t7_iC0vRNIgnz99dultQKNCXQVUrrhIDUokevBzg2dU',
                role: 'developer',
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
        about: 'something will be here',
        appType: 'Web & Mobile App',
        description:"Parijana-Papers is a website that contains previous year papers of Chhatrapati Shahu Ji Maharaj University, Kanpur. Due to lockdown period, the interaction between the college-mates has reduced to a large extinct due to which sharing of important notes and previous year papers has also reduced. Most of the studen don't get the papers. So to resolve that problem, this website is developed. It contains all the previous year papers for the students so that they can easily get those papers.",
        title: 'Parijana Papers',
        techUsed: ['React', 'React Native', 'NodeJs + ExpressJS', 'MySQL'],
        image: {
            banner: '',
            snapshots: [
                {
                    title: '',
                    description: '',
                    image: ''
                }
            ],
        },
        links: {
            github: 'https://github.com/algomonk016/Parijana-Papers',
            live: 'https://parijana.herokuapp.com/college',
            playstore: 'https://github.com/algomonk016/Parijana-Papers',
            ios: 'https://github.com/algomonk016/Parijana-Papers'
        },
        style: {
            color: 'purple',
            shape: 'square',
        },
        team: [
            {
                name: 'Shreya Sonkar',
                image: 'https://media-exp1.licdn.com/dms/image/C4E03AQEb2i1nH7XDyA/profile-displayphoto-shrink_400_400/0/1611202470269?e=1647475200&v=beta&t=_S95-P7fmEbiZv3pmMBYQH5atnnCjPrLiF9-uRVkV7U',
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