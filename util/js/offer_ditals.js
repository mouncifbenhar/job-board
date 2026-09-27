import { offers } from "./data.js"
import { display_offer_byId } from "./render.js"
import { storFalloweoffer } from "./storage.js"
const params = new URLSearchParams(window.location.search)

const id = Number(params.get("id"))
const offer = offers.find( offer => offer.id === id )
display_offer_byId(offer)
const follow = document.querySelector("#follow")
follow.addEventListener("click",()=>{
    storFalloweoffer(offer)
})
