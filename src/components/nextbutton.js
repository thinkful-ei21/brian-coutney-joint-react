import React from 'react';

export default function NextButton(props) {
///on click function for both buttons
	

return (
		<div>
			<button className="next" onClick={event => props.nextImage(event)}>Next</button>
		</div>
	)

}