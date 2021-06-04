import {Component} from 'react'
import Thumbnail from "../assets/media/media32.jpg"
class Tile extends Component {
    render(){
        return(


            
            (<div className="tile">
                <div className="tile__media">
                  <img className="tile__img" src={Thumbnail} alt=""  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">
                    Watch Now
                  </div>
                </div>
              </div>)
        )
    }
}
export default Tile