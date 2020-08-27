import React from 'react';

class download extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="down">
                <h1 style={{color:"#22d46c"}}>Coming Sooooon!</h1>
                <h3>we limit our searches to a specific depth to ensure performance but GUI will use your underlying hardware so will be faster. <br/>Downloadable GUI provides additional functionalities such as deeper searches and search filters.</h3>
                <h3>GUI is in development stage. If you wanna get it first, contact us!</h3>
            </div>
        )
    }
}
export default download;