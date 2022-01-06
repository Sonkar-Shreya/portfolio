import React from 'react';
import PageRoutes from './routes'
import './App.css'
import {
  Navbar,
} from './container/components/'

import { gsap, TweenMax } from "gsap/all";
import { Tween } from 'gsap/gsap-core';

// don't forget to register plugins

function App() {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  const $hoverables = document.querySelectorAll('.hoverable');

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    Tween.to($bigBall, .4, {
      x: e.pageX - 15,
      y: e.pageY - 15
    })
    Tween.to($smallBall, .1, {
      x: e.pageX - 5,
      y: e.pageY - 7
    })
  }

  // Hover an element
  function onMouseHover() {
    Tween.to($bigBall, .3, {
      scale: 4
    })
  }
  function onMouseHoverOut() {
    Tween.to($bigBall, .3, {
      scale: 1
    })
  }

  gsap.registerPlugin(Tween, TweenMax);

  return (
    <div className='fullScreenContainer relative '>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height={30} width={30}>
            <circle cx={15} cy={15} r={12} strokeWidth={0} />
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height={10} width={10}>
            <circle cx={5} cy={5} r={4} strokeWidth={0} />
          </svg>
        </div>
      </div>

      <Navbar />
      <PageRoutes />
    </div>
  );
}

export default App;
