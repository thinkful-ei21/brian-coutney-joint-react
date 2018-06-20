import React from 'react';

export default function PreviousButton(props) {
///on click function for both buttons
	

return (
	
    <div>
        <button className="previous" onClick={event => props.prevImage(event)}>Previous</button>
    </div>
	)

}