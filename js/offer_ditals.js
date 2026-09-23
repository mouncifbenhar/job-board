import { offers } from "./data.js"
import { display_offer_byId } from "./render.js"

const params = new URLSearchParams(window.location.search)

const id = Number(params.get("id"))

display_offer_byId(offers,id)