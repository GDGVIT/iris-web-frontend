
import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
// import Points from './Assets/points.png' 
import short from './Assets/social-distancing.svg';
import pin from './Assets/pin.png';






function LandingContent() {
  // const [darkMode, setDarkMode] = React.useState(getInitialMode())
  // React.useEffect(() => {
  //   localStorage.setItem('dark', JSON.stringify(darkMode));
  // } , [darkMode])

  // function getInitialMode(){
  //   const savedMode = JSON.parse(localStorage.getItem('dark'));
  //   return savedMode || false
  // }
  return (
    <div className="content">
          <h1>
            Introducing you,<br/>to the <span style={{color:"#22d46c"}}>efficient</span> way for web hopping!
          </h1>
          <br/>
          <a href ={"https://dscvit.com"}>www.dscvit.com</a>
          <br/>
          <br/>
          <h1>
            About
          </h1>
          <h4 className="about">
          Hopping on the internet or sometimes referred to as “falling down the rabbit hole” is embarking on an internet search that leads from one website to another forming a series of redirects, ultimately leading to a totally different webpage of a non-related subject. 
            <br/>
            <br/>
            WikiWeb is a fun tool for web hoppers to skip on the long hours of surfing the web and hopping between webpages to find between links or paths between two totally unrelated things and instead getting a clean graph listing all hops between those two unrelated things. WikiWeb also allows users to adjust the depth of this graph and even get the shortest path in this graph.
            <br/>
            <br/>
            It works with the most popular online encyclopedia: Wikipedia and searches Wiki’s database for URL’s and terms.
          </h4>
          <br/>
          <Link to="/hopping">
          <button>Start Hopping!</button>
          </Link>
          
          {/* <Button variant="contained" color="primary" text="primary">
          Start Hoping!
        </Button> */}
        <br/>
        <h1>Features</h1>
        <h4 style={{color:"grey"}}> This tool can be used by researchers, enthusiastic web hoppers, or in general web geeks to find links between<br/> two totally random things that are present in the Wikipedia database.
</h4>
        <br/>
        <div className="feature-grid">
          <img src={short} alt="point-icon" className="point1"/>
          <h5>Allow users to get the shortest</h5>
          {/* <br/> */}
          {/* <img src={Points} alt="point-icon" className="point"/>
          <h5>Allow users to adjust depth</h5> */}
          <img src={pin} alt="point-icon" className="point"/>
          <h5>Number hops between two items</h5>
          {/* <img src={Points} alt="point-icon" style={{paddingLeft:"20px"}}/>
          <h5 style={{paddingLeft:"20px"}}>We have <span onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-button">{darkMode ? "light mode" : "dark mode"}</span> for you </h5> */}
        </div>
        
        </div>
  );
}


export default LandingContent;