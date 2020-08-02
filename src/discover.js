import React from 'react';
import './index.css';
import Resultexplore from './resultexplore';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';


class Discover extends React.Component{
    constructor(props) {
        super(props);
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


      mySubmitHandler = (event) => {
        this.setState({loader: true})
        event.preventDefault();
        // console.log(this.state);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"start":this.state.start});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://aqueous-dusk-74394.herokuapp.com/explore", requestOptions)
          .then(response => response.json())
          .then(result => {
              this.setState({loader: false }) 
              // console.log(result)
              
              // if(result.code === 200){
                // console.log(result.edges)
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
      render() {
        
        return(
          <>
          <div className="search-box">
              <form onSubmit={this.mySubmitHandler}>
              <label className="lab">
                  <h2 className="search-heading">Enter search term or wiki URL</h2>
                  <input type="text" name="start" className="inputURL3" onChange={this.myChangeHandler} required/>
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
              <input type="submit" value="Search" className="submit"/>
              </label>
              </form>
          </div>
          <Loader type="BallTriangle" color="#22d46c" height={100} width={100} style={{textAlign:"center"}} visible={this.state.loader} />
          <div className={this.state.loader ? "vanish" : "showhop"}>
          <Resultexplore render={this.state.render} nodes={this.state.nodes} edges={this.state.edges} nodelength={this.state.nodelength} edgelength={this.state.edgelength}/>
          </div>
          </>
      )
      }
}


export default Discover;
