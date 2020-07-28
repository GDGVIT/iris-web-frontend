import React from 'react';
import './index.css';
import Result from './result';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

// import { values } from 'd3';
// function Searchbox() {
//         return(
            
//         )
    
// }

class Searchbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  length: null,
                        start : "",
                        mid : " " , 
                        mid2 : " " , 
                        end: '',
                        code: '',
                        visible: false,
                        change: 0,
    };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

        // postForm('https://dscwikiweb.herokuapp.com/')
        // .then(data => console.log(data))
        // .catch(error => console.error(error))
      
    //   function postForm(url) {
    //     const formData = new FormData(document.querySelector('.former'))
      
    //     return fetch(url, {
    //       method: 'POST', // or 'PUT'
    //       body: formData  // a FormData will automatically set the 'Content-Type'
    //     })
    //     .then(response => response.json())
    //   }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }


      mySubmitHandler = (event) => {
        this.setState({visible: true, change: 1})
        event.preventDefault();
        console.log(this.state.start);
        console.log(this.state.end);

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"start":this.state.start,"end":this.state.end});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://dscwikiweb.herokuapp.com/getPath", requestOptions)
  .then(response => response.json())
  .then(result => {
      this.setState({visible: false })
      if (result.code === 404){
        this.setState({code:result.code , length : 3 , change: 2})
      }
    else if (result.graph.length === 3){
        this.setState({start:result.graph[0],mid:result.graph[1],end:result.graph[2], length : 3, code:result.code, change: 3})
        console.log(this.state)
    }
    else if (result.graph.length === 2){
        this.setState({start:result.graph[0],end:result.graph[1], length : 2, code:result.code , mid:"" , change: 4})
        console.log(this.state)
    }
    else if (result.graph.length === 4){
      this.setState({start:result.graph[0],end:result.graph[1], length : 4, code:result.code , mid:result.graph[1] ,mid2:result.graph[2], change: 5})
      console.log(this.state)
  }
    
  }
 
  )
    
  .catch(error =>{console.log(error)
    this.setState({visible: false})
}
  );

      }
      render() {
        return (
            <>
            {/* <h1>Hello {this.state.start} {this.state.end}</h1> */}
            <div className="search-box">
                <form className="former" onSubmit={this.mySubmitHandler}>
                <label className="lab">
                    <h2 className="search-heading">Enter two search terms or wiki URLs</h2><br/>
                    <input type="text" className="inputURL" placeholder="From" onChange={this.myChangeHandler} name="start" required/>
                </label>
                {/* <h2 className="compare">Compare two terms:<span style={{color:"transparent"}}>....</span>
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setCompare(prevMode => !prevMode)}/><br/>
                </h2> */}
                <h4 className="to">TO</h4>
                <input type="text" className={"inputURL2"} placeholder="To"  onChange={this.myChangeHandler} name="end" />
                {/* <h2 className="compare">Adjust Depth:
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setdepth(prevMode => !prevMode)}/><br/>
                </h2> */}
                
                <br/>
                <input type="submit" value="Search" className="submit"/>
                </form>
            </div>
            {/* <div style={{textAlign:"center",fontSize:"25px"}}>
                Let's compare stuff !
            </div> */}
                <Loader type="BallTriangle" color="#22d46c" height={100} width={100} style={{textAlign:"center"}} visible={this.state.visible} />
                <div className={this.state.visible ? "vanish" : "showhop"}>
                <Result code={this.state.code} length={this.state.length} start={this.state.start} end={this.state.end} mid={this.state.mid} change={this.state.change} mid2={this.state.mid2}/>
                </div>
            </>
        )
      }
}
// export default Result;

export default Searchbox;