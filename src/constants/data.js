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

export default technologies