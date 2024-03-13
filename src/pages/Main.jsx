import React from 'react'
import { MdArrowBackIos } from "react-icons/md";

const Main = ({ handleisSaveAudience }) => {
    return (
        <div className='Main_container'>
            <div className='Main_container__inner'>
                <header><MdArrowBackIos size={30} />View Audience</header>
                <button onClick={handleisSaveAudience}>Save Segment</button>
            </div>
        </div>
    )
}

export default Main