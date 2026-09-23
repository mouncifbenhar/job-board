import { pagnation } from "./paginition.js"


export function disply_offers(offers){

const offers_container = document.querySelector("#offers-container")
offers_container.textContent = ""
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
a.setAttribute("value",offer.id)
a.setAttribute("class","link")
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

export function display_offer_byId(offers,id){

const offer = offers.find( offer => offer.id === id )
const main = document.querySelector("main")


// =========================
// HEADER
// =========================

const header = document.createElement("div")

header.setAttribute(
    "class",
    "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
)


const header_content = document.createElement("div")


const status_div = document.createElement("div")

status_div.setAttribute(
    "class",
    "flex items-center gap-2 mb-2"
)


const status_point = document.createElement("span")

status_point.setAttribute(
    "class",
    "inline-block w-2 h-2 rounded-full bg-emerald-500"
)


const status_text = document.createElement("span")

status_text.setAttribute(
    "class",
    "text-xs font-medium text-gray-500"
)

status_text.textContent = offer.typeContrat


status_div.appendChild(status_point)

status_div.appendChild(status_text)


const h1 = document.createElement("h1")

h1.setAttribute(
    "class",
    "text-2xl font-bold text-gray-900"
)

h1.textContent = offer.titre


const entreprise = document.createElement("p")

entreprise.setAttribute(
    "class",
    "text-xs text-gray-500 mt-1"
)

entreprise.textContent = offer.entreprise + " - " + offer.ville


header_content.appendChild(status_div)

header_content.appendChild(h1)

header_content.appendChild(entreprise)


// Follow button
const follow_button = document.createElement("button")

follow_button.setAttribute(
    "class",
    "bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 hover:bg-indigo-700 transition shadow-sm self-start sm:self-auto"
)


const follow_icon = document.createElement("i")

follow_icon.setAttribute(
    "class",
    "fa-regular fa-bookmark"
)


const follow_text = document.createElement("span")

follow_text.textContent = "Follow Offer"


follow_button.appendChild(follow_icon)

follow_button.appendChild(follow_text)


header.appendChild(header_content)

header.appendChild(follow_button)


// =========================
// GRID
// =========================

const grid = document.createElement("div")

grid.setAttribute(
    "class",
    "grid grid-cols-1 lg:grid-cols-3 gap-6"
)


// =========================
// LEFT CONTENT
// =========================

const left_content = document.createElement("div")

left_content.setAttribute(
    "class",
    "lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8"
)


// Offer Information
const information_div = document.createElement("div")

const information_title = document.createElement("h2")

information_title.setAttribute(
    "class",
    "text-base font-bold text-gray-900 pb-4 border-b border-gray-100"
)

information_title.textContent = "Offer Information"

information_div.appendChild(information_title)


// Description courte
const short_description_div = document.createElement("div")

short_description_div.setAttribute(
    "class",
    "space-y-2"
)


const short_description_title = document.createElement("h3")

short_description_title.setAttribute(
    "class",
    "text-xs font-bold text-gray-900"
)

short_description_title.textContent = "Description courte"


const short_description = document.createElement("p")

short_description.setAttribute(
    "class",
    "text-xs text-gray-500 leading-relaxed"
)

short_description.textContent = offer.descriptionCourte


short_description_div.appendChild(short_description_title)

short_description_div.appendChild(short_description)


// Description longue
const long_description_div = document.createElement("div")

long_description_div.setAttribute(
    "class",
    "space-y-2"
)


const long_description_title = document.createElement("h3")

long_description_title.setAttribute(
    "class",
    "text-xs font-bold text-gray-900"
)

long_description_title.textContent = "Description longue"


const long_description = document.createElement("p")

long_description.setAttribute(
    "class",
    "text-xs text-gray-500 leading-relaxed"
)

long_description.textContent = offer.descriptionLongue


long_description_div.appendChild(long_description_title)

long_description_div.appendChild(long_description)


// Profil recherché
const profile_div = document.createElement("div")

profile_div.setAttribute(
    "class",
    "space-y-2"
)


const profile_title = document.createElement("h3")

profile_title.setAttribute(
    "class",
    "text-xs font-bold text-gray-900"
)

profile_title.textContent = "Profil recherché"


const profile = document.createElement("p")

profile.setAttribute(
    "class",
    "text-xs text-gray-500 leading-relaxed"
)

profile.textContent = offer.profilRecherche


profile_div.appendChild(profile_title)

profile_div.appendChild(profile)


// Work details
const work_details_div = document.createElement("div")

work_details_div.setAttribute(
    "class",
    "space-y-2"
)


const work_details_title = document.createElement("h3")

work_details_title.setAttribute(
    "class",
    "text-xs font-bold text-gray-900"
)

work_details_title.textContent = "Informations"


const work_details = document.createElement("p")

work_details.setAttribute(
    "class",
    "text-xs text-gray-500 leading-relaxed"
)

work_details.textContent =
    "Type de contrat : " + offer.typeContrat +
    " | Ville : " + offer.ville +
    " | Date de publication : " + offer.datePublication


work_details_div.appendChild(work_details_title)

work_details_div.appendChild(work_details)


// Add everything to left content
left_content.appendChild(information_div)

left_content.appendChild(short_description_div)

left_content.appendChild(long_description_div)

left_content.appendChild(profile_div)

left_content.appendChild(work_details_div)


// =========================
// RIGHT CONTENT
// =========================

const right_content = document.createElement("div")

right_content.setAttribute(
    "class",
    "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit space-y-4"
)


const technologies_title = document.createElement("h2")

technologies_title.setAttribute(
    "class",
    "text-sm font-bold text-gray-900"
)

technologies_title.textContent = "Associated Technologies"


const technologies_div = document.createElement("div")

technologies_div.setAttribute(
    "class",
    "flex flex-wrap gap-2 pt-1"
)


offer.technologies.forEach(tech => {

    const technology = document.createElement("span")

    technology.setAttribute(
        "class",
        "bg-indigo-50/70 text-indigo-700 border border-indigo-100 text-xs px-3 py-1.5 rounded-lg font-medium"
    )

    technology.textContent = tech

    technologies_div.appendChild(technology)
})


// Contact
const contact_title = document.createElement("h2")

contact_title.setAttribute(
    "class",
    "text-sm font-bold text-gray-900 mt-4"
)

contact_title.textContent = "Contact"


const contact = document.createElement("p")

contact.setAttribute(
    "class",
    "text-xs text-gray-500"
)

contact.textContent = offer.emailContact


right_content.appendChild(technologies_title)

right_content.appendChild(technologies_div)

right_content.appendChild(contact_title)

right_content.appendChild(contact)


// =========================
// GRID + MAIN
// =========================

grid.appendChild(left_content)

grid.appendChild(right_content)

main.appendChild(header)

main.appendChild(grid)
}


export function disply_pagination(offers) {
    const div_contain_number_page_old = document.getElementById("old_p")
    if(div_contain_number_page_old){
        div_contain_number_page_old.remove()
    }
    const limit_iteam_in_page = 3

    const page_limet = Math.ceil(offers.length / limit_iteam_in_page)

    const main = document.querySelector("main")
    const div_contain_number_page = document.createElement("div")
    
    div_contain_number_page.setAttribute(
        "class",
        "flex items-center justify-center gap-2 mt-6"
    )
    div_contain_number_page.setAttribute(
        "id",
        "old_p"
    )

    for (let i = 1; i <= page_limet; i++) {

        const page_number_div = document.createElement("div")

        page_number_div.setAttribute(
            "class",
            "page-number w-9 h-9 flex items-center justify-center rounded-xl bg-blue-700 text-white text-sm font-bold cursor-pointer hover:bg-blue-800"
        )

        page_number_div.setAttribute("value", i)

        page_number_div.textContent = i

        div_contain_number_page.appendChild(page_number_div)
    }

    main.appendChild(div_contain_number_page)


    const page_number_div = document.querySelectorAll(".page-number")

    
            const new_offers = pagnation(
                1,
                limit_iteam_in_page,
                offers
            )
            disply_offers(new_offers)
        
    
    page_number_div.forEach(div => {

        div.addEventListener("click", () => {

            const itime_value = div.getAttribute("value")
        
            const new_offers = pagnation(
                itime_value,
                limit_iteam_in_page,
                offers
            )
            
            disply_offers(new_offers)
        
        })
    })
}




