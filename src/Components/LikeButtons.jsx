import React, { useState } from 'react';

const LikeButtons = () => {

    const  [likeButtons, setLikeButtons] = useState(0);

    return (

        <div>

            <p>{likeButtons} &hearts;</p>

            <button onClick= {() => setLikeButtons(likeButtons + 1)} className='increment'>&#10084;&#65039; + </button>
            <button onClick= {() => {if (likeButtons > 0) {setLikeButtons(likeButtons - 1)}}} className='decrement'>&#128148; - </button>

        </div>

    )

}

export default LikeButtons;