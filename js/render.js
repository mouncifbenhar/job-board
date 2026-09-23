export function disply_offers(offers){
const offers_container = document.querySelector("#offers-container")

offers.forEach(offer =>{
const div_0 = document.createElement("div")

div_0.setAttribute("class","bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between")


const div_0_1 = document.createElement("div")


const div_0_1_div = document.createElement("div")

div_0_1_div.setAttribute("class","flex items-start justify-between gap-2 mb-3")


// h3
const h3 = document.createElement("h3")

h3.setAttribute("class","font-bold text-gray-900 text-base leading-snug")

h3.textContent = offer.titre


// button
const button = document.createElement("button")

button.setAttribute("class","flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md hover:bg-gray-100 shrink-0")


// i
const i = document.createElement("i")

i.setAttribute("class","fa-regular fa-bookmark")


// span
const span = document.createElement("span")

span.textContent = "Follow"


button.appendChild(i)

button.appendChild(span)


// nav
const nav = document.createElement("nav")

nav.setAttribute("class","flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md hover:bg-gray-100 shrink-0")


// a
const a = document.createElement("a")

a.setAttribute("href",`Offer_Details.html?id=${offer.id}`)

a.textContent = "Details"


nav.appendChild(a)


// div_0_1_div
div_0_1_div.appendChild(h3)

div_0_1_div.appendChild(button)

div_0_1_div.appendChild(nav)


// p
const p = document.createElement("p")

p.setAttribute("class","text-xs text-gray-500 leading-relaxed mb-6")

p.textContent = offer.descriptionCourte


// div_0_1
div_0_1.appendChild(div_0_1_div)

div_0_1.appendChild(p)


// technologies
const div_1 = document.createElement("div")

div_1.setAttribute("class","flex flex-wrap gap-2")


offer.technologies.forEach(tech => {

    const span_tech = document.createElement("span")

    span_tech.setAttribute(
        "class",
        "bg-indigo-50 text-indigo-600 text-xs px-2.5 py-1 rounded-md font-medium"
    )

    span_tech.textContent = tech

    div_1.appendChild(span_tech)
})


// div_0
div_0.appendChild(div_0_1)

div_0.appendChild(div_1)



offers_container.appendChild(div_0)

})

}


