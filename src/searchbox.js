import React from 'react';
import './index.css';
import Result from './result';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
import { ReCaptcha } from 'react-recaptcha-v3'

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
                        mid : "" , 
                        mid2 : "" , 
                        end: "",
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
        // console.log(this.state)
      }
      verifyCallback = (recaptchaToken) => {
        // Here you will get the final recaptchaToken!!!  
        // console.log(recaptchaToken, "<= your recaptcha token")
        localStorage.setItem("captcha", recaptchaToken);
      }
    
      updateToken = () => {
        // you will get a new token in verifyCallback
        this.recaptcha.execute();
      }

      mySubmitHandler = (event) => {
        this.setState({visible: true, change: 1})
        event.preventDefault();
        
        var url = this.state.start
        var url2 = this.state.end
        if (this.state.start.slice(0,4) === "http"){
          url=""
          for (let i = 0; i < 30; i++) {
            if (this.state.start.slice(i,i+22) === "en.wikipedia.org/wiki/"){
              console.log("link");
              for (let j = i+22; j < this.state.start.length ; j++){
                if(this.state.start[j] === "_"){
                  url= url + " "
                }
                if(this.state.start[j] !== "_"){
                  url += this.state.start[j]
                }
              }
              // console.log(url);
              // this.setState({start : url})
            }
        }
        // this.setState({start : url})
        // console.log(this.state.start)
      }
        if (this.state.end.slice(0,4) === "http"){
          url2=""
          for (let i = 0; i < 30; i++) {
            if (this.state.end.slice(i,i+22) === "en.wikipedia.org/wiki/"){
              console.log("link");
              for (let j = i+22; j < this.state.end.length ; j++){
                if(this.state.end[j] === "_"){
                  url2= url2 + " "
                }
                if(this.state.end[j] !== "_"){
                  url2 += this.state.end[j]
                }
              }
              // console.log(url2);
            }
        }
        // this.setState({end : url2})
      }
      // console.log(`"${url}"`);
      // console.log(url2);

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("g-recaptcha-response", localStorage.getItem("captcha"));

var raw = JSON.stringify({"start":url,"end":url2});
console.log(raw)
console.log(myHeaders)

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://aqueous-dusk-74394.herokuapp.com/getPath", requestOptions)
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
      this.setState({start:result.graph[0],end:result.graph[3], length : 4, code:result.code , mid:result.graph[1] ,mid2:result.graph[2], change: 5})
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
            <ReCaptcha
            ref={ref => this.recaptcha = ref}
            sitekey="6LfpxLoZAAAAAHUYwsedyR1gGw9mRXtHqhEA4TXQ"
            action='onLoad'
            verifyCallback={this.verifyCallback}
            />
            {/* <h1>Hello {this.state.start} {this.state.end}</h1> */}
            <div className="search-box">
                <form className="former" onSubmit={this.mySubmitHandler}>
                <label className="lab">
                    <h2 className="search-heading">Enter two search terms or wiki URLs</h2><br/>
                    <input type="text" className="inputURL" placeholder="From" onChange={this.myChangeHandler} name="start" required/>
                </label>
               <label>
                <h4 className="to">TO</h4>
                <input type="text" className={"inputURL2"} placeholder="To"  onChange={this.myChangeHandler} name="end" />
                </label>
                
                <br/>
                <label>
                <input type="submit" value="Search" className="submit"/>
                </label>
                <Link to="/download">
                <button type="download" value="export" className={this.state.change !== 0  ? "export" : "vanish"}>Download full version</button>
                </Link>
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