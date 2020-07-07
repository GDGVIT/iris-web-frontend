import React from 'react';
function Searchbox() {


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
                    <h2 className="search-heading">Enter two search terms or wiki URLs</h2><br/>
                    <input type="text" name="name" className="inputURL" placeholder="From"/>
                </label>
                {/* <h2 className="compare">Compare two terms:<span style={{color:"transparent"}}>....</span>
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setCompare(prevMode => !prevMode)}/><br/>
                </h2> */}
                <h4 className="to">TO</h4>
                <input type="text" name="name" className={"inputURL2"} placeholder="To"/>
                {/* <h2 className="compare">Adjust Depth:<span style={{color:"transparent"}}>....</span>
                <input type="checkbox" name="Compare" className="checkbox" onClick={() => setdepth(prevMode => !prevMode)}/><br/>
                </h2> */}
                
                <br/>
                <input type="submit" value="Search" className="submit"/>
                </form>
            </div>
        )
    
}

export default Searchbox;