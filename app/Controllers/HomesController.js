import { homeService } from "../Services/HomesService.js";



export class HomesController {
  constructor() {
    // console.log('Homes Controller is working')
  }

  createHome() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    // console.log(formData);
    homeService.createHome(formData)
  }


}