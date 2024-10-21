import React, { useEffect, useState } from 'react'
import '../Components/ProgressBar.css'

function ProgressBar() {
    const [bar, setBar] = useState(0);

    useEffect(() => {
        const intervel = setInterval(() => {
            setBar((prevBarValue) => {
                if (prevBarValue >= 100) {
                    setInterval(intervel);
                } return Math.min(prevBarValue + 5, 100);
            })
        }, 1000);
        return () => {
            setInterval(intervel);
        }
    }, []);

    return (
        <div>
            <div className='progressbar-continer'>
                <div className='progressbar' style={{ transform: `translateX(${bar - 100}%)` }} ></div>
            </div>
        </div>
    )
}

export default ProgressBar