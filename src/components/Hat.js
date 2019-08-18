import React, {Component} from "react"
import beachHat from "../hats/beach-hat.png"
import tiaraHat from "../hats/tiara-hat.png"
import topHat from "../hats/top-hat.png"
import vikingHat from "../hats/viking-hat.png"
import safariHat from "../hats/safari-hat.png"
import witchHat from "../hats/witch-hat.png"



export default class Hat extends Component {

    changeClassName = () => {
        if (this.props.currentPhoto.id === 5) {
            return "beach-hat"
        } else if (this.props.currentPhoto.id === 1) {
            return "mimi1"
        }
    }

   render() {


       return (
            <div className="Hat">
                <img onClick={() => this.props.onHatClick(beachHat)} className="beach-hat" src={beachHat}></img>
               <img onClick={() => this.props.onHatClick(tiaraHat)} className="beach-hat" src={tiaraHat}></img>
               <img onClick={() => this.props.onHatClick(topHat)} className="beach-hat" src={topHat}></img>
               <img onClick={() => this.props.onHatClick(vikingHat)} className="beach-hat" src={vikingHat}></img>
               <img onClick={() => this.props.onHatClick(safariHat)} className="beach-hat" src={safariHat}></img>
               <img onClick={() => this.props.onHatClick(witchHat)} className="beach-hat" src={witchHat}></img>
            </div>
       )
   }

}