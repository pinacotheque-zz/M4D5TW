import {Component} from 'react'

class Tile extends Component {
    render(){
        return(

            
            
            (<div className="tile">
                <div className="tile__media">
                  <img className="tile__img" src="assets/media/media32.jpg" alt=""  />
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