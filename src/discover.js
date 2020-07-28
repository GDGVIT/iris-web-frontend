import React from 'react';
function Discover() {

        const [compare] = React.useState(false)
        React.useEffect(() => {
            localStorage.setItem('compare', JSON.stringify(compare));
        } , [compare])

        // function getInitialCheck(){
        //     const savedcheck = JSON.parse(localStorage.getItem('compare'));
        //     return savedcheck || false
        // }
        // const [depth, setdepth] = React.useState(false)
        // React.useEffect(() => {
        //     localStorage.setItem('depth', JSON.stringify(depth));
        // } , [depth])

        // function getInitialDepth(){
        //     const savedcheck = JSON.parse(localStorage.getItem('depth'));
        //     return savedcheck || false
        // }


        return(
            <div className="search-box">
                <form>
                <label className="lab">
                    <h2 className="search-heading">Enter search term or wiki URL</h2>
                    <input type="text" name="url1" className="inputURL3"/>
                </label>
                <label>
                  <h2>Depth:</h2>
                </label>
                1<span style={{color:"transparent"}}>....</span>
                <input type="range" min="1" max="5" class="slider" id="myRange"/>
                <span style={{color:"transparent"}}>....</span>5
                <br/>
                <br/>
                <input type="submit" value="Search" className="submit"/>
                </form>
            </div>
        )
    
}

export default Discover;