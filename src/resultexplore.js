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
            <div className="result">
              Let's discover stuff
            </div>
            )
        }
        else if(this.props.render === 1){
          return (
            <div className="result">
             We couldn't find searched item in the wiki database. Please check the URL, if you have entered it manually.
            </div>
            )
        }
        else if(this.props.render ===  2){
          const graph = {
            nodes: [
            ],
            edges: [
            ]
          };
          let nodelength = this.props.nodelength
          for(let i = 0; i< nodelength ; i++){
            const add = {id: this.props.nodes[i], label: this.props.nodes[i],} 
            graph.nodes.push(add)
          }
          let edgelength = this.props.edgelength
          for(let j = 0; j< edgelength ; j++){
            const addedge = { from: this.props.edges[j][0], to: this.props.edges[j][1] }
            graph.edges.push(addedge)
          }
          console.log(graph.edges) 
          console.log(this.props.edges[1][0]) 
          const options = {
            layout: {
              hierarchical : true,
              // hierarchical : {
              //   direction : 'UD'
              // }
            },
            // selectNode : {

            // },
            edges: {
              color: {highlight : "red"},
              length : 600
            //   length: 300
            },
            nodes : {

              color:{highlight : "red",background : "#22d46c",border : "#22d46c"},
              mass:3,
              physics:true,
              shape : "dot",
              size:25 ,
              font:'10px arial #22d46c',
              title : "nirmit"
            },
            height: "700px",
            // interaction: {
            //   url : 'www.dscvit.com'
            // }
            // locale: window.open(URL, "_blank")
            // event: {
            //   doubleClick: window.open(URL, "_blank")
            // }
          };
          const events = {
            nodes: graph.nodes,
            edges: graph.edges 
          };
          return (
            <div className="result2">
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