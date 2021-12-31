import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faEye,
    faEyeSlash,
    faFan,
    faLock,
    faAt,
    faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons'

const FontAwesome = ({
    icon = ['fas', 'cog'],
    spin = false,
    pulse = false,
    fixedWidth = false,
    size = '1x',
    rotation = '0',
    left = 0,
    right = 0,
    inverse = false,
    // flip = "",
    top = 0,
    bottom = 0
}) => {

    library.add(
        fab,
        faCoffee,
        faCog,
        faSpinner,
        faQuoteLeft,
        faSquare,
        faCheckSquare,
        faEye,
        faEyeSlash,
        faFan,
        faLock,
        faAt,
        faLongArrowAltRight
    )

    return (
        <>
            <FontAwesomeIcon
                icon={icon}
                spin={spin}
                pulse={pulse}
                fixedWidth={fixedWidth}
                size={size}
                // rotation={rotation}
                // flip={flip}
                inverse={inverse}
                transform={"left-" + left + " right-" + right + ' top-' + top + ' bottom-' + bottom + " rotate-" + rotation}
                // style={{ '--fa-primary-color': 'red' }}
            />
        </>
    )
}

export default FontAwesome