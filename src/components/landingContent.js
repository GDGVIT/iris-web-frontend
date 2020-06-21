import React from 'react';
import '../App.css';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import point from '../Assets/points.png';
// import { purple } from '@material-ui/core/colors';

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
// }))(Button);

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1000),
//   },
// }));

// const classes = useStyles();
export default function landingContent() {  
  return (
    <div className="App">
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
        <Button variant="contained" color="primary" text="primary">
        Start Hoping!
      </Button>
      <br/>
      <br/>
      <br/>
      <h1>Features</h1>
      <h4 style={{color:"grey"}}>Qui enim est non irure dolore ut deserunt do esse enim.</h4>
      <br/>
      <img src={point} alt="feature-icon"/><h3 style={{display: "inline-block", marginLeft: "40px"}}>Allow users to get the shortest path</h3><br/>
      <img src={point} alt="feature-icon"/><h3 style={{display: "inline-block" , marginLeft: "40px"}}>Allow users to adjust depth</h3><br/>
      <img src={point} alt="feature-icon"/><h3 style={{display: "inline-block" , marginLeft: "40px"}}>Number hops between two items</h3>
    </div>
  );
}
