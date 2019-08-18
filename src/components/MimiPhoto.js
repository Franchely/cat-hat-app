import React, {Component} from "react"
import mimi1 from "../mimi-bed.JPG"
import mimi2 from "../mimi-couch-2.JPG"
import mimi3 from "../mimi-laying-down.JPG"
import mimi4 from "../mimi-couch.JPG"
import mimi5 from "../mimi-window.JPG"

//hats
import beachHat from "../hats/beach-hat.png"
import tiaraHat from "../hats/tiara-hat.png"
import topHat from "../hats/top-hat.png"
import vikingHat from "../hats/viking-hat.png"
import safariHat from "../hats/safari-hat.png"
import defaultHat from "../hats/default-hat.png"


export default class MimiPhoto extends Component {


    
    
    render() {

        const showPhoto = () => {
            if (this.props.hat.length < 1 ) {
                return defaultHat
            }
            else {
                return this.props.hat
            }
        }

        const changeClassName = () => {
            if (this.props.hat.length > 1) {
                return `mimi${this.props.currentPhoto.id}`
            } else {
                return `default-photo`
            }
        }

       const nextPhoto = () => {
           console.log("hi")
       }

       console.log(this.props)
       return (
           <div className="MimiPhoto">
               <div className="image-div">
                   <img className="photo" src={this.props.currentPhoto.photo}></img>
                   <img className={changeClassName()} src={showPhoto()} ></img>
               </div>
               
           </div>
       )
   }

}