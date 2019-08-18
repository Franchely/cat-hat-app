import React, {Component} from "react"
import Hat from "./Hat"

export default class HatContainer extends Component {


   render() {
       return (
           <div className="HatContainer">
               <h3>Click on a hat to try it on!</h3>
               <Hat onHatClick={this.props.onHatClick} currentPhoto={this.props.currentPhoto}/>
           </div>
       )
   }

}