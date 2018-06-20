import React from 'react';

export default function NextButton(props) {
///on click function for both buttons
	

return (
		<div>
			
			<button onClick={() => props.onClick()}>Next</button>
		</div>
	)

}