import React from 'react';
import Graph from "react-graph-vis";

class Resultexplore extends React.Component{
    constructor(props) {
        super(props);
        this.state = {message: "Let's compare stuff"}
      }
    // componentDidMount() {  
    // }
      render() {
        if (this.props.render === 0){ 
          return (
            <div style={{textAlign:"center"}}>
              Let's discover stuff
            </div>
            )
        }
        else if(this.props.render === 1){
          return (
            <div style={{textAlign:"center"}}>
             We couldn't find searched item in the wiki database. Please check the URL, if you have entered it manually.
            </div>
            )
        }
        else if(this.props.render ===  2){
          const graph = {
            nodes: [
            //   { id: 1, label: this.props.start, title: "node 1 tootip text" ,color:"#22d46c" ,shape: "hexagon",size:45 ,font:'10px arial #22d46c'},
            //   { id: 2, label: this.props.mid, title: "node 2 tootip text" ,color:"#22d46c" ,shape: "hexagon", size:45 ,font:'10px arial #22d46c' },
            //   { id: 3, label: this.props.end, title: "node 3 tootip text" ,color:"#22d46c" , shape: "hexagon", size:45 ,font:'10px arial #22d46c'},
            ],
            edges: [

            //   { from: 1, to: 2 },
            //   { from: 2, to: 3 },
            ]
          };
          let nodelength = this.props.nodelength
          for(let i = 0; i< nodelength ; i++){
              graph.nodes.push(`id: name, label: name, title: "garbage" ,color:"#22d46c" ,shape: "hexagon",size:45 ,font:'10px arial #22d46c`)
          }
          console.log(graph.nodes) 
          const options = {
            layout: {
              hierarchical : {
                // direction : 'LR'
              }
            },
            edges: {
              color: "#22d46c",
            //   length: 300
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
      }
}
export default Resultexplore;