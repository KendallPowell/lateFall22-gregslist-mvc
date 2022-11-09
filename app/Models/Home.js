import { generateId } from "../Utils/generateId.js";


export class Home {

  constructor(data) {
    this.id = generateId()
    this.createdAt = new Date()
    this.img = data.img
    this.price = data.price
    this.rooms = data.rooms
    this.bathrooms = data.bathrooms
    this.squarefeet = data.squarefeet
  }

  get HomeTemplate() {
    return `
    <div class="col-4 p-4">
     <div class="card">
       <img
         src="https://www.buildidaho.com/Documents%20and%20Settings/54/Site%20Documents/Slider/Features/Boise-Idaho-Homes-for-Sale-1.jpg"
         alt="big house">
       <div class="card-body">
         <h5 class="card-title d-flex justify-content-between mb-2">
           <span>Price</span>
           <span>Square Feet</span>
         </h5>
         <h5 class="card-title d-flex justify-content-between mb-2">
           <span>rooms</span>
           <span>bathrooms</span>
         </h5>
         <button class="btn btn-primary">
           See Details
          </button>
       </div>
     </div>
   </div>
    `
  }

}