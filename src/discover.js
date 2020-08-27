import React from 'react';
import './index.css';
import Resultexplore from './resultexplore';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { ReCaptcha } from 'react-recaptcha-v3';
// import MyComponent from './download';
// import {exportComponentAsJPEG } from "react-component-export-image";


class Discover extends React.Component{
    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
        this.state = { 
                        start : "",
                        // depth : 1,
                        loader : false,
                        render : 0
                        // message : false
                     };
        
      }
    myChangeHandler = (event) => {
      
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        // if(val > 2){
        //   this.setState({depth:2, message: true})
        // }
        // if(val <= 2){
        //   this.setState({message: false})
        // }
        
      }
      verifyCallback = (recaptchaToken) => {
        this.setState({captcha: recaptchaToken});
        console.log(recaptchaToken);
        }
      
        updateToken = () => {
          this.recaptcha.execute();
        }
        JsonDownload = () => {
          
            let dataStr = JSON.stringify(this.state.edges);
            let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
            let exportFileDefaultName = 'data.json';
        
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        
        }
        CSVDownload = () =>{
          // let jsonData =this.state.edges;
          function parseJSONToCSVStr(jsonData) {
            if(jsonData.length === 0) {
                return '';
            }
        
            let keys = Object.keys(jsonData[0]);
        
            let columnDelimiter = ',';
            let lineDelimiter = '\n';
        
            // let csvColumnHeader = keys.join(columnDelimiter);
            let csvStr =  lineDelimiter;
        
            jsonData.forEach(item => {
                keys.forEach((key, index) => {
                    if( (index > 0) && (index < keys.length-1) ) {
                        csvStr += columnDelimiter;
                    }
                    csvStr += item[key];
                });
                csvStr += lineDelimiter;
            });
        
            return encodeURIComponent(csvStr);;
        }
        
        function exportToCsvFile(jsonData) {
          let csvStr = parseJSONToCSVStr(jsonData);
          let dataUri = 'data:text/csv;charset=utf-8,'+ csvStr;
      
          let exportFileDefaultName = 'data.csv';
      
          let linkElement = document.createElement('a');
          linkElement.setAttribute('href', dataUri);
          linkElement.setAttribute('download', exportFileDefaultName);
          linkElement.click();
        }
        exportToCsvFile(this.state.edges)
        
        }

      mySubmitHandler = (event) => {
        this.setState({loader: true})
        event.preventDefault();
        // console.log(this.state);
        var url = this.state.start
        if (this.state.start.slice(0,4) === "http"){
          url=""
          for (let i = 0; i < 30; i++) {
            if (this.state.start.slice(i,i+22) === "en.wikipedia.org/wiki/"){
              // console.log("link");
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
        this.setState({start : url})
        // console.log(this.state.start)
      }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("g-recaptcha-response", this.state.captcha);

        var raw = JSON.stringify({"start":url});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://radiant-crag-98690.herokuapp.com/explore", requestOptions)
          .then(response => response.json())
          .then(result => {
              this.setState({loader: false }) 
              // console.log(result)
              
              // if(result.code === 200){
                console.log(result)
                this.setState({render : 2 , edges: result.edges, nodes : result.nodes, edgelength: result.edges.length, nodelength: result.nodes.length})

                // localStorage.setItem("edges",result.edges);
                // localStorage.setItem("edges", JSON.stringify(result.edges));
                // localStorage.setItem("nodes",result.nodes);
              // }
              if (result.code === 404){
                this.setState({render: 1})
              }
              console.log(this.state)
              // console.log(localStorage.getItem('edges'[2]))
          }
          )
          .catch(error =>{console.log(error)
            this.setState({render: 1})
            this.setState({loader: false})
        }
        );
      }
      componentDidMount() {
        loadReCaptcha("6LfpxLoZAAAAAHUYwsedyR1gGw9mRXtHqhEA4TXQ");
        // this.updateToken();
      }
      render() {
        
        return(
          <>
          <ReCaptcha
            ref={ref => this.recaptcha = ref}
            sitekey="6LfpxLoZAAAAAHUYwsedyR1gGw9mRXtHqhEA4TXQ"
            verifyCallback={this.verifyCallback}
            />
          <div className="search-box">
              <form onSubmit={this.mySubmitHandler}>
              <label className="lab">
                  <h2 className="search-heading">Enter search term or wiki URL</h2><br/>
                  <input type="text" name="start" className="inputURL3" onChange={this.myChangeHandler} required />
              </label>
              
              {/* <label>
                <h2>Depth:</h2>
              </label>
              1<span style={{color:"transparent"}}>....</span>
              
              <span style={{color:"transparent"}}>....</span>5
              <br/>
              <span className={this.state.message ? "nj" :"vanish"}>Download our GUI for more depth and complex results
              </span>
              <br/> */}
              <label>
              <input type="submit" value="Search" className="submit" onClick={() => this.updateToken()}/>
              </label>
              {/* <span style={{color:"transparent"}}>..................</span> */}
              
              
              
              {/* <div style={{display:"inline-block"}}> */}
              {/* <button type="download" value="export" className={this.state.render === 2 ? "export" : "vanish"}>Export  &nbsp; &nbsp; &nbsp;        &gt;</button>
              <button type="download" value="PNG" className={this.state.render === 2 ? "as" : "vanish"}>as PNG</button>
              <button type="download" value="CSV" className={this.state.render === 2 ? "as" : "vanish"}>as CSV</button>
              <button type="download" value="JSON" className={this.state.render === 2 ? "as" : "vanish"}>as JSON</button> */}
              <div className={this.state.render === 2 ? "dropdown" : "vanish"}>
                <button className="dropbtn" type='button'>Export</button>
                <div className="dropdown-content">
                  {/* <span onClick={() => exportComponentAsJPEG(this.componentRef)}>as PNG</span> */}
                  <span onClick={() => this.CSVDownload()}>as CSV</span>
                  <span onClick={() => this.JsonDownload()}>as JSON</span>
                  
                </div>
              </div>
              {/* </div> */}
              </form>
          </div>
          <Loader type="BallTriangle" color="#22d46c" height={100} width={100} style={{textAlign:"center"}} visible={this.state.loader} className="result"/>
          <div className={this.state.loader ? "vanish" : "showhop"}>
          {/* <section> */}
          <Resultexplore render={this.state.render} nodes={this.state.nodes} edges={this.state.edges} nodelength={this.state.nodelength} edgelength={this.state.edgelength} ref={this.componentRef}/>
          {/* </section> */}
          </div>
          
          </>
      )
      }
}


export default Discover;
