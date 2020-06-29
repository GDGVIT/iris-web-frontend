import React from 'react';

class navbar extends React.Component{
    render(){
        return(
            <div className="container center">
                <nav className="menu">
                    {/* <h1 className="menu__logo">Epic Co.</h1> */}

                    <div className="menu__right">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a className="menu__link" href="#">Home</a></li>
                            <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Search</a></li>
                        </ul>
                    </div>
                        {/* <form className="menu__search-form hide" method="POST">
                            <input className="menu__search-input" placeholder="Type and hit enter">
                        </form> */}
                    
                </nav>
            </div>
        )
    }
}

export default navbar;