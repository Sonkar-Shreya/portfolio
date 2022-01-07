import React from "react";
import {
    Coding,
    BlueBoyTyping,
    Typing
} from '../../../constants/images'

const WhatElse = () => {
    const Links = {
        icpc: 'https://drive.google.com/file/d/1tnfMmxxWXg7UTUwd1fnmkDxcfkO7WIKp/view?usp=sharing',
        codechef: 'https://www.codechef.com/users/yuvanastra',
        codeforces: 'https://codeforces.com/profile/yuvanastra',
        spoj: '',
        atcoder: 'https://atcoder.jp/users/algomonk016',
        spoj: '',
        fastfinger: 'https://10fastfingers.com/user/2707320/',
        typeracer: 'https://data.typeracer.com/pit/profile?user=yuvanastra',
    }
    return (
        <div className="flex justify-center relative h-full w-full">
            <div className="w-1/2 px-16 py-8 font-PlayFair flex items-center">
                <div className="text-gray-700">
                    <h2 className="font-Juana text-4xl mt-3 mb-10 pb-3 w-72 border-b border-violet-500">Problem Solving</h2>
                    <p>
                        I am into problem solving since the day I stepped into my college, that is July 2019.
                    </p>
                    <ul className="my-2">
                        <li className="pb-1">Good problem solving skills and excellent grasp on <span className="border-b border-blue-400">data structures</span>. </li>
                        <li className="pb-1">
                            Solved <span className="text-blue-600 text-lg mx-1">1000+</span>
                            questions on different coding websites including
                            <span className="">
                                <a className="border-b border-blue-400 mx-1" href={Links.codeforces}>Codeforces</a>,
                                <a className="border-b border-blue-400 mx-1" href={Links.codechef}>Codechef</a>,
                                <a className="border-b mx-1" href={Links.codeforces}>SPOJ</a>,
                                <a className="border-b border-blue-400 mx-1" href={Links.codeforces}>AtCoder</a>,
                            </span>
                        </li>
                        <li className="pb-1">
                            My team Archmaester qualified to
                            <a href={Links.icpc}
                                className="text-orange-600 hover:border-b border-orange-400 easeInOut duration-300 mx-1">
                                ICPC Regionalist
                            </a>
                            at Kanpur-Mathura Region.
                        </li>
                    </ul>
                    <img className="w-96 ml-auto mt-10" src={Coding} />
                </div>
            </div>

            <div className="w-1/2 px-16 pb-16 font-PlayFair flex items-center">
                <div>
                    <img className="w-96 mb-10" src={BlueBoyTyping} />
                    <h2 className="font-Juana text-4xl mt-3 mb-10 pb-3 w-40 border-b border-violet-500">Typing</h2>
                    <p>In my spare time, I generally start making some noice with my keyboard.</p>
                    <p>Here are its results</p>
                    <a className="border-b border-blue-400 mx-1" href={Links.fastfinger}>10FastFingers</a>, 
                    <a className="border-b border-blue-400 mx-1" href={Links.typeracer}>Type Racer</a>
                </div>
            </div>
        </div>
    )
}

export default WhatElse