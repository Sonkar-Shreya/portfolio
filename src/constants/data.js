import {
    TechIcons
} from './icons'

const technologies = {
    Javascript: [
        { 
            title: 'React', 
            icon: TechIcons.ReactNativeIcon,
            hoverShadow: 'blue'
        },
        { 
            title: 'React Native', 
            icon: TechIcons.ReactNativeIcon,
            hoverShadow: 'blue'
        },
        { 
            title: '', 
            icon: TechIcons.NodeIcon,
            hoverShadow: 'green'
        },
        { 
            title: 'Jquery', 
            icon: TechIcons.JqueryIcon,
            hoverShadow: 'blue'
        }
    ],
    Backend: [
        { 
            title: '', 
            icon: TechIcons.MySQLIcon,
            hoverShadow: 'blue'
        },
        { 
            title: 'MongoDB', 
            icon: TechIcons.MongoDBIcon,
            hoverShadow: 'green'
        },
        { 
            title: 'Firebase', 
            icon: TechIcons.FirebaseIcon,
            hoverShadow: ''
        }
    ],
    Styling: [
        // { title: 'CSS', icon: TechIcons.CSSIcon },
        { 
            title: 'TailwindCSS', 
            icon: TechIcons.TailwindCssIcon,
            hoverShadow: 'blue'
        },
        { 
            title: 'Bootstrap', 
            icon: TechIcons.BootstrapIcon,
            hoverShadow: 'violet'
        },
        { 
            title: 'MaterialUI', 
            icon: TechIcons.MaterialUIIcon,
            hoverShadow: 'blue'
        },
        { 
            title: 'ReactStrap', 
            icon: TechIcons.ReactStrapIcon,
            hoverShadow: 'violet'
        }
    ],
    Others: [
        { 
            title: 'Git & Github', 
            icon: TechIcons.GitIcon,
            hoverShadow: 'violet'
        },
        { 
            title: 'Herkou', 
            icon: TechIcons.HerokuIcon,
            hoverShadow: 'violet'
        },
        { 
            title: 'Gitlab', 
            icon: TechIcons.GitLabIcon,
            hoverShadow: ''
        }
    ]
}

export default technologies