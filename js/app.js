import { offers } from "./data.js"
import { disply_pagination} from "./render.js"
import { search as sertsh} from "./filters.js"

disply_pagination(offers)
const search = document.querySelector("#search")
search.addEventListener("input",()=>{
   const result = sertsh(offers,search.value)
   disply_pagination(result)
})



