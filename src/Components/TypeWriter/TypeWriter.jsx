import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypeWriter() {
    const handleType = () => {
    // access word count number
        console.log()
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
    <div className='App'>
        <h1 className='text-white md:text-[3rem] text-[1.6rem] font-medium break-words md:leading-[4rem] sm:leading-[3rem] leading-[2rem]'>
            WELCOME TO{' '}
        <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
            words={['THE BEST SPORT UPDATES AND LIVE BETSLIPS', 'THE BEST SPORT UPDATES AND LIVE BETSLIPS', 'THE BEST SPORT UPDATES AND LIVE BETSLIPS', 'THE BEST SPORT UPDATES AND LIVE BETSLIPS']}
            loop={'infinite'}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            // onType={handleType}
            />
        </span>
        </h1>
    </div>
  )
}
