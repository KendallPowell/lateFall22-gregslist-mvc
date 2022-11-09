import { appState } from "../AppState.js"
import { Home } from "../Models/Home.js"



class HomeService {
  createHome(formData) {
    let newHome = new Home(formData)
    // console.log(formData)
    appState.homes = [...appState.homes, newHome]
  }
}


export const homeService = new HomeService()