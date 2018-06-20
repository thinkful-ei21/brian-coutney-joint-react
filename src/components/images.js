import React from 'react';

export default class Images extends React.Component {
		constructor(props){
			super(props)

			this.state = {
				images: [
					{path: './images/bday.jpg'},
					{path: './images/cat.jpg'},
					{path: './images/dog.jpg'},
					{path: './images/halfDog.jpg'},
					{path: './images/paws.jpg'},
					{path: './images/sleepyCat.jpg'}
				]
			}
			
		}

		
		render() { 
				return ( 
					<div> 
						<img src={this.state.images[0].path}/> 
					</div> 
				)
		}
}