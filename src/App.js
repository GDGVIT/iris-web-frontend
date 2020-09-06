import React from 'react';
import left from './Assets/left.png'
import Content from './landing'
// import Points from './Assets/points.png' 
import './index.css';
import Searchbox from './searchbox';
import Discover from './discover';
import Download from './download';
import { BrowserRouter as Router, Switch , Route ,  NavLink} from 'react-router-dom';
import logo from './Assets/logo.png';
import sun from './Assets/sun.png';
// import dsc from './Assets/short.svg';
import color from './Assets/dsc-color.png';
import white from './Assets/dsc-white.png';

// import { loadReCaptcha } from 'react-recaptcha-v3'
// import Navbar from './navbar'
// import bottom from './Assets/bottom.png'

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  } , [darkMode])

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || true
  }
  
    // loadReCaptcha("6LfpxLoZAAAAAHUYwsedyR1gGw9mRXtHqhEA4TXQ");

  
  // const [tab, setTab] = React.useState(getInitialTab())
  // React.useEffect(() => {
  //   localStorage.setItem('Home', JSON.stringify(tab));
  // } , [tab])

  // function getInitialTab(){
  //   const saver = JSON.parse(localStorage.getItem('Home'));
  //   console.log(saver);
  //   return saver || true
  // }
// console.log(tab)


  return (
    <Router>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="container center">
                <nav className={darkMode ? "darkmenu" : "menu"}>
                <img src={logo} className="logo" alt="logo"/>
                <h3 className="logo-head">IRIS</h3>

                    <div className="menu__right">
                        <ul className="menu__list">
                          <NavLink exact to="/" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
                            <li>Home</li>
                            </NavLink>
                            <NavLink to="/hopping" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
                            <li>hopping</li>
                            </NavLink>
                            <NavLink to="/discover" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
                            <li>Discover</li>
                            </NavLink>
                            <NavLink to="/download" className= "menu__list-item menu__link" activeClassName="menu__list-item menu__link active">
                            <li>Download</li>
                            </NavLink>
                        </ul>
                    </div>
                        
                    
                </nav>
            </div>
      
      <Switch>
      <Route path="/" exact>
      
      <img src={left} alt="left" className="left"/>
      <Content mode={JSON.parse(localStorage.getItem('dark'))}/>
      <div className="feature-grid">
          <img src={sun} alt="point-icon" className={"dork1"}/>
          <h5 className={"dorkin"}>We have <span onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-button">{darkMode ? "light mode" : "dark mode"}</span> for you </h5>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <footer className={darkMode ? "dark-foot" : "foot"}>
          <div style={{textAlign:"center",display:"inline-block"}}>
            <br/>
            <br/> 
          For any queries please contact us at,<br/>
          <a href="mailto:dscvitvellore@gmail.com">dscvitvellore@gmail.com</a>
          </div>
          <div style={{display:"inline-block"}} className="floater">
            <h3>A project by</h3>
            {/* <a > */}
            <a href ={"https://dscvit.com"} target="_blank" rel="noopener noreferrer">
            <img src={white} alt="" className={darkMode ? "log" : "vanish"}/>
            <img src={color} alt="" className={darkMode ? "vanish" : "log"}/>
            </a>
            {/* </a> */}
            </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <h2>DSC-VIT</h2> */}

      </footer>
        
        {/* <span style={{padding:"2px 40px",fontWeight:"1px",fontSize:"18px"}}>We are all ears for any suggestions and feedback that you might have for us. Please reach out to us on dscvit@gmail.com for anything you want to say.</span> */}
      </Route>
      <Route path="/hopping" component={Searchbox}/>
      <Route path="/discover" component={Discover}/>
      <Route path="/download" component={Download}/>
      </Switch>
      
    
    {/* <img src={bottom} alt="bottom" className="bottom"/> */}
    </div>
    </Router>
  );
}

export default App;