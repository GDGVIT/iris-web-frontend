import React from 'react';
// import Graph from 'react-graph-network';
import Graph from "react-graph-vis";


class Result extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {message: "Let's compare stuff"}
      }
    
    componentDidMount() {
      // this.setState({d3: ''});
    }
    
      render() {
        // const nodes:[]
        // const graph = {
        //   nodes: [
        //     { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "hexagon",size:45 ,font:'10px arial #22d46c'},
        //     { id: 2, label: this.props.mid, title: "node 2 tootip text" ,color:"#22d46c" ,shape: "hexagon", size:45 ,font:'25px arial #22d46c' },
        //     { id: 3, label: this.props.end, title: "node 3 tootip text" ,color:"#22d46c" , shape: "hexagon", size:45 ,font:'10px arial #22d46c'},
        //   ],
        //   edges: [
        //     { from: 1, to: 2 },
        //     { from: 2, to: 3 },
        //   ]
        // };
        
        if (this.props.change === 0){ 
          return (
            <div className="result">
              Let's hop from link to link
            </div>
            )
        }
        else if(this.props.change === 1){
          return (
            <div className="result">
             We couldn't find any connection between the terms. Download our GUI for expanded results
            </div>
            )
        }
        else if(this.props.change === 2){
          return (
            <div className="result">
             We couldn't find searched item in the wiki database. Please check the URL, if you have entered it manually.
            </div>
            )
        }
        
        
        else if(this.props.change ===  3){
          const graph = {
            nodes: [
              { id: 1, label: this.props.start, color:"#22d46c" ,shape: "dot",size:45 ,font:'15px arial #22d46c'},
              { id: 2, label: this.props.mid, color:"#22d46c" ,shape: "dot", size:45 ,font:'25px arial #22d46c' },
              { id: 3, label: this.props.end, color:"#22d46c" , shape: "dot", size:45 ,font:'15px arial #22d46c'},
            ],
            edges: [
              { from: 1, to: 2 },
              { from: 2, to: 3 },
            ]
          };

          const options = {
            layout: {
              hierarchical : {
                direction : 'LR'
              }
              
            },
            edges: {
              color: "#22d46c",
              length : 500
            },
            nodes : {

              color:{highlight : "red",background : "#22d46c",border : "#22d46c"},
              mass:3,
              physics:true,
              shape : "dot",
              size:25 ,
              font:'10px arial #22d46c',
            },
          };
         

          const events = {
            nodes: graph.nodes,
            edges: graph.edges
          };

          
  
          return (
            <div className="result1">
               <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {

      }}
    />
            </div>
            )
        }
        
        else if(this.props.change ===  4){
          const graph = {
            nodes: [
              { id: 10, label: this.props.start, color:"#22d46c" ,shape: "dot", size:35 ,font:'20px arial #22d46c'},
              { id: 20, label: this.props.end, color:"#22d46c" ,  size:35  , font:'20px arial #22d46c' ,shape: "dot"},
            ],
            edges: [
              { from: 10, to: 20 },
            ]
          };

          const options = {
            layout: {
              hierarchical : {
                direction : 'LR'
              }
              
            },
            edges: {
              color: "#22d46c",
              length : 300
            },
            nodes : {

              color:{highlight : "red",background : "#22d46c",border : "#22d46c"},
              mass:3,
              physics:true,
              shape : "dot",
              size:25 ,
              font:'10px arial #22d46c',
            },
            height: 500,
          };
         
          const events = {
            nodes: graph.nodes,
            edges: graph.edges
          };

          
  
          return (
            <div className="result1">
               <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
      }}
    />
            </div>
            )
        }


        else if(this.props.change ===  5){
          const graph = {
            nodes: [
              { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "dot",size:45 ,font:'15px arial #22d46c'},
              { id: 2, label: this.props.mid, title: "node 2 tootip text" ,color:"#22d46c" ,shape: "dot", size:45 ,font:'20px arial #22d46c' },
              { id: 3, label: this.props.mid2, title: "node 3 tootip text" ,color:"#22d46c" , shape: "dot", size:45 ,font:'20px arial #22d46c'},
              { id: 4, label: this.props.end, title: "node 3 tootip text" ,color:"#22d46c" , shape: "dot", size:45 ,font:'15px arial #22d46c'},
            ],
            edges: [
              { from: 1, to: 2 },
              { from: 2, to: 3 },
              { from: 3, to: 4 },
            ]
          };

          const options = {
            layout: {
              hierarchical : {
                direction : 'LR'
              }
              
            },
            edges: {
              color: "#22d46c",
              length : 600
            },
            nodes : {

              color:{highlight : "red",background : "#22d46c",border : "#22d46c"},
              mass:3,
              physics:true,
              shape : "dot",
              size:25 ,
              font:'10px arial #22d46c',
            },
            height: 500
          };
         

          const events = {
            nodes: graph.nodes,
            edges: graph.edges
          };

          
  
          return (
            <div className="result1">
               <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {

      }}
    />
            </div>
            )
        }





       
        
        
      }
}
export default Result;