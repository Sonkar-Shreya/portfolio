import { motion } from 'framer-motion'

const FullScreen = (props) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.5
			}
		}
	}

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	}

	const FullScreenVariant = {
		hidden: {
			scale: 4,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			staggerChildren: 0.5
		},
		exit: {
			scale: [1, 4, 1],
            opacity: 0,
            transition: {
                duration: 0.7
            }
		},
	}

	return (
		<motion.div
			variants={FullScreenVariant}
			initial='hidden'
			animate='show'
			exit='exit'
			transition={{duration: 0.5, delayChildren: '5s'}}
			className='h-screen snap-y snap-proximity overflow-y-scroll scroll-smooth'
		>
			{props.children}
		</motion.div>
	)
}

export default FullScreen
