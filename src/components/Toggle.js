import React, { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';

function Toggle(props) {

    const[display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle display</button>
           {display && <FunctionalComponent/>}
        </div>
    );
}

export default Toggle;