import  React ,{Component} from  "react"
import axios from "axios"

const server = {
     api : "https://newsapi.org/v1/articles?source=the-next-web",
     key : "f28d0d9102eb4c3b959302265c030dff"
}

export default new  class article  extends Component {
    constructor(props){
        super(props)
     
    }

    gettop(){
     server.api = [
         axios.get("https://newsapi.org/v1/articles?source=ars-technica&apiKey="+server.key),
         axios.get("https://newsapi.org/v1/articles?source=bloomberg&apiKey="+server.key),
         axios.get("https://newsapi.org/v1/articles?source=ign&apiKey="+server.key)
     ]

     return axios.all(server.api)

    }


    /**
     * data must be  a string
     */
    getbycategory(data){
        if(data =="technology"){
            server.api = "https://newsapi.org/v1/articles?source=ars-technica"
        }
        else if(data == "Business"){
            server.api = "https://newsapi.org/v1/articles?source=bloomberg"
        }
        else if(data == "gaming"){
            server.api = "https://newsapi.org/v1/articles?source=ign"
        }

       
         return fetch(server.api+'&category='+data+'&apiKey='+server.key,{method:'GET'})
         .then(response => response.json())

    }
}