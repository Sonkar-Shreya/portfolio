import React from "react";

const FullStop = ({size=2, classes = ' '}) => {
    const sizeClass = ` w-${size} h-${size} `
    return (
        <span className={[" rounded-full bg-purple-500 ", sizeClass, classes]} />
    )
}

export default FullStop