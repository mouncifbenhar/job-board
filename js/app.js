import { offers } from "./data.js"
import { disply_pagination} from "./render.js"
import { search as sertsh , sort as sorr , searsh_bytec} from "./filters.js"


disply_pagination(offers)
const search = document.querySelector("#search")
search.addEventListener("input",()=>{
   const result = sertsh(offers,search.value)
   disply_pagination(result)
})
const sort = document.querySelector("#sort")
sort.addEventListener("click",()=>{
   const result = sorr(offers)
   disply_pagination(result)
})

const tec_div = document.querySelectorAll(".tec")

tec_div.forEach((button) => {

    button.addEventListener("click", () => {

        const tec = button.getAttribute("value")
        const result = searsh_bytec(offers, tec)
        disply_pagination(result)
    })

})




