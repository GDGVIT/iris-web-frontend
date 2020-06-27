import React from 'react';
export default class searchbox extends React.Component {
    render(){
        return(
            <div className="search-box">
                <form>
                <label>
                    Name:<br/>
                    <input type="text" name="name" />
                </label><br/>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}