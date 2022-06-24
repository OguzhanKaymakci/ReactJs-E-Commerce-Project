import axios from "axios"
import { ModelLogin } from "./models/ModelLogin"

const baseUrl= 'http://localhost:8085/'

const config= axios.create({
  baseURL: baseUrl

})

export const userLogin= (email:string, passwords: string) => {

  const sendParams= {
    username: email,
    password: passwords

}


  return config.post<ModelLogin>('auth',sendParams)  
}