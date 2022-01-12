import React from "react";
const Technologies = ({ technologies = {} }) => {
    return (
        <div className="p-0 mb-5 text-gray-800">
            <h2 className="font-Juana text-4xl mt-3 mb-10 pb-3 w-44 border-b border-violet-500">My Skills</h2>
            {
                Object.keys(technologies).map((key, i) => (
                    <div key={key} className="mt-4">
                        <div className="text-lg my-3"> {key} </div>
                        <div className="flex">
                            {
                                technologies[key].map(tech => {
                                    const hoverStyle = `hover:shadow-${tech.hoverShadow}-300 hover:shadow-lg`
                                    const normalStyle = 'flex m-2 justify-center items-center shadow py-1 px-3 rounded-lg cursor-pointer h-12 easeInOut duration-300 '
                                    return (
                                        <div key={tech.title} className={`${normalStyle} ${hoverStyle}`}>
                                            <tech.icon />
                                            <span className="mx-1">{tech.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Technologies