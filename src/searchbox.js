import React from 'react';
function Searchbox() {

        const [compare, setCompare] = React.useState(false)
        React.useEffect(() => {
            localStorage.setItem('compare', JSON.stringify(compare));
        } , [compare])

        // function getInitialCheck(){
        //     const savedcheck = JSON.parse(localStorage.getItem('compare'));
        //     return savedcheck || false
        // }
        const [depth, setdepth] = React.useState(false)
        React.useEffect(() => {
            localStorage.setItem('depth', JSON.stringify(depth));
        } , [depth])

        // function getInitialDepth(){
        //     const savedcheck = JSON.parse(localStorage.getItem('depth'));
        //     return savedcheck || false
        // }


        return(
            <div className="search-box">
                <form>
                <label className="lab">
                    <h2 className="search-heading">Enter search term or wiki URL</h2><br/>
                    <input type="text" name="name" className="inputURL"/>
                </label>
                <h2 className="compare">Compare two terms:<span style={{color:"transparent"}}>....</span>
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setCompare(prevMode => !prevMode)}/><br/>
                </h2>
                <input type="text" name="name" className={compare ? "inputURL" : "vanish"}/>
                <h2 className="compare">Adjust Depth:<span style={{color:"transparent"}}>....</span>
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setdepth(prevMode => !prevMode)}/><br/>
                </h2>
                <select className={depth ? "dropdown" : "vanish"}>
                <option selected value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
                <br/>
                <input type="submit" value="Search" className="submit"/>
                </form>
            </div>
        )
    
}

export default Searchbox;