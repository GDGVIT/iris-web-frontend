
import React from 'react';
import './index.css';

// import Points from './Assets/points.png' 
// import Mode from './Assets/mode.png' 


// React.useEffect(() => {
//   const Mode = JSON.parse(localStorage.getItem('dark'));
// console.log(Mode);
// } , [])

class landingContent extends React.Component {
  render(){  
    return (
      <div className="content">
          <h1>
            Introducing you,<br/>to the <span style={{color:"#22d46c"}}>efficient</span> way for web hoping!
          </h1>
          <br/>
          <a href ={"https://dscvit.com"}>www.wikiweb.com</a>
          <br/>
          <br/>
          <h1>
            About
          </h1>
          <h4 className="about">
            Nisi eiusmod eiusmod commodo eiusmod sint veniam est culpa esse anim cupidatat elit. Non consequat sunt incididunt elit laboris fugiat esse voluptate. Nulla cupidatat est elit incididunt nulla consectetur dolore incididunt pariatur sunt qui aliqua ex. Pariatur id non occaecat elit adipisicing commodo et ex occaecat.
            <br/>
            <br/>
            Irure adipisicing dolore commodo Lorem fugiat magna minim in. Commodo consectetur ullamco nostrud veniam consequat et duis veniam occaecat amet ullamco mollit. Nisi minim
          </h4>
          <br/>
          <button>Start Hoping!</button>
          {/* <Button variant="contained" color="primary" text="primary">
          Start Hoping!
        </Button> */}
        <br/>
        <br/>
        <h1>Features</h1>
        {/* <h4 style={{color:"grey"}}>Qui enim est non irure dolore ut </h4> */}
        <br/>
        <div className="feature-grid">
          {/* <img src={Points} alt="point-icon"/>
          <h4>Allow users to get the shortest</h4>
          <img src={Points} alt="point-icon"/>
          <h4>Allow users to adjust depth</h4>
          <img src={Points} alt="point-icon"/>
          <h4>Number hops between two items</h4> */}
          {/* <img src={Points} alt="point-icon"/>
          <h4>We have <button>{localStorage.getItem('dark') ? "light-mode" : "dark-mode"}</button> for you </h4> */}
        </div>
        </div>
  );
}
}

export default landingContent