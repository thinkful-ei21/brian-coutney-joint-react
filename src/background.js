import React from 'react';
import Images from './components/images';
import Button from './components/button';

export default class Background extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {

        }}
    

    render(){
        return(
            <div className="background">
                <Images/>
                <Button/>
            </div>
        )

    }


}