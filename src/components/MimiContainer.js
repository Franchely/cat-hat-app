import React, {Component} from "react"
import HatContainer from "./HatContainer";
import MimiPhoto from "./MimiPhoto";
import mimi1 from "../mimi-bed.JPG"
import mimi2 from "../mimi-couch-2.JPG"
import mimi3 from "../mimi-laying-down.JPG"
import mimi4 from "../mimi-couch.JPG"
import mimi5 from "../mimi-window.JPG"

export default class MimiContainer extends Component {

    state = {
        hatClicked: [],
        currentPhoto: {id: 5, photo: mimi5},
        photoArray: [{id: 1, photo: mimi1}, {id: 2, photo: mimi2}, {id: 3, photo: mimi3}, {id: 4, photo: mimi4}, {id: 5, photo: mimi5}]
    }

    onHatClick = (hat) => {
        if (this.state.hatClicked.includes(hat)) {
            this.setState({
                hatClicked: []
            })
        } else {
        this.setState({
            hatClicked: hat
        }) 
      }
    }

    changePhoto = () => {
       let id = this.state.currentPhoto.id 
       let newId = id + 1
       let newPhoto 
       if (newId > 5) {
           this.setState({
               currentPhoto: {id: 1, photo: mimi1},
               hatClicked: []
           })
       } else {
           newPhoto = this.state.photoArray.find(photo => photo.id === newId)
           this.setState({
               currentPhoto: newPhoto,
               hatClicked: []
              
           })
       }
        
    }

   render() {
       return (
           <div className="MimiContainer">
               <HatContainer onHatClick={this.onHatClick} currentPhoto={this.state.currentPhoto}/>
               <MimiPhoto hat={this.state.hatClicked} currentPhoto={this.state.currentPhoto}/>
               <div>
                   <button onClick={this.changePhoto} className="next-photo">Next Photo</button>
               </div>
           </div>
       )
   }

}