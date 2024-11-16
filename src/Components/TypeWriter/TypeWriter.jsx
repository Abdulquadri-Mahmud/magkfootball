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
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
            Life is simple{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
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
