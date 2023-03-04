import { Component } from "react";
import './Searchbox.css'

class Searchbox extends Component {
    render () {
        return <div>
            <input 
            type='search'
            className="search-box"
            placeholder="search monsters"
            onChange={this.props.onSearchChange}
            />
        </div>
    }
}

export default Searchbox;