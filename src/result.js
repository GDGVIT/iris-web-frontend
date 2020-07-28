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
            <div style={{textAlign:"center"}}>
              Let's compare stuff
            </div>
            )
        }
        else if(this.props.change === 1){
          return (
            <div style={{textAlign:"center"}}>
             We couldn't find any connection between the terms. Download our GUI for better results
            </div>
            )
        }
        else if(this.props.change === 2){
          return (
            <div style={{textAlign:"center"}}>
             We couldn't find searched item in the wiki database. Please check the URL, if you have entered it manually.
            </div>
            )
        }
        
        
        else if(this.props.change ===  3){
          const graph = {
            nodes: [
              { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "hexagon",size:45 ,font:'10px arial #22d46c'},
              { id: 2, label: this.props.mid, title: "node 2 tootip text" ,color:"#22d46c" ,shape: "hexagon", size:45 ,font:'25px arial #22d46c' },
              { id: 3, label: this.props.end, title: "node 3 tootip text" ,color:"#22d46c" , shape: "hexagon", size:45 ,font:'10px arial #22d46c'},
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
              length: "300"
            },
            height: "500px",
            // width:"600px"
          };
         

          const events = {
            nodes: graph.nodes,
            edges: graph.edges
          };

          
  
          return (
            <div style={{textAlign:"center",marginTop:"-200px"}}>
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
              { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "hexagon", size:45 ,font:'20px arial #22d46c'},
              { id: 2, label: this.props.end, title: "node 3 tootip text" ,color:"#22d46c" ,  size:45  , font:'20px arial #22d46c' ,shape: "hexagon"},
            ],
            edges: [
              { from: 1, to: 2 },
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
              length: "300"
            },
            height: "500px",
            // width:"600px"
          };
         
          const events = {
            nodes: graph.nodes,
            edges: graph.edges
          };

          
  
          return (
            <div style={{textAlign:"center",marginTop:"-200px"}}>
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








        // if (this.props.length === 2){
          
        // }
        // else if (this.props.length === 1){
        //   const graph = {
        //     nodes: [
        //       { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "hexagon", size:45},
        //     ],
        //   };
        // }
        
        
      }
}
export default Result;