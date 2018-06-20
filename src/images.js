import React from 'react';
import NextButton from './components/nextbutton';
import PreviousButton from './components/previousbutton';
export default class Images extends React.Component {
		constructor(props){
			super(props)

			this.state = {
				images: [
                    {path: './images/bday.jpg',
                     count: 1
                    },
                    {path: './images/cat.jpg',
                    count: 2
                    },
                    {path: './images/dog.jpg',
                    count: 3
                    },
                    {path: './images/halfDog.jpg',
                    count: 4
                    },
                    {path: './images/paws.jpg',
                    count: 5
                    },
                    {path: './images/sleepyCat.jpg',
                    count: 6
                    }
                ],
                currentCount: 1
			}
			
		}  

         next (count){ 

           this.setState({
            currentCount: this.state.currentCount + 1
            
           })
           
           
        }
        
        setImages(){
            const targetImage = this.state.images.filter((img) => this.state.currentCount === img.count)
            return targetImage.path 
        }


		render() { 
				return ( 
					<div className="images"> 
						
                        <NextButton onClick={() => {
                            this.next(this.state) 
                            console.log("button pressed");}} />
                        <PreviousButton />
                        <img src={this.setImages()}/> 
					</div> 
				)
		}
}