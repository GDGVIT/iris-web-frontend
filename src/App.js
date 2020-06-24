import React from 'react';
import left from './Assets/left.png'
import Content from './landing'
import Points from './Assets/points.png' 
import './index.css';
// import Navbar from './navbar'
// import bottom from './Assets/bottom.png'

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  } , [darkMode])

  function getInitialMode(){
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false
  }
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      
      <div className="container center">
                <nav className={darkMode ? "darkmenu" : "menu"}>
              

                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a className="menu__link " href="#">Home</a></li>
                            <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Search</a></li>
                        </ul>
                    </div>
                        
                    
                </nav>
            </div>
      <img src={left} alt="left" className="left"/>
      

      <Content mode={JSON.parse(localStorage.getItem('dark'))}/>
      <div className="feature-grid">
          <img src={Points} alt="point-icon" style={{paddingLeft:"20px"}}/>
          <h4 style={{paddingLeft:"20px"}}>We have <span onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-button">{darkMode ? "light mode" : "dark mode"}</span> for you </h4>
        </div>

    {/* <img src={bottom} alt="bottom" className="bottom"/> */}
    </div>
  );
}

export default App;
