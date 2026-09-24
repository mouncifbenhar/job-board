export function storFalloweoffer(offer) {

    let offers_stor = JSON.parse(localStorage.getItem("offers_stor")) || []
    if (offers_stor.some(item => item.id === offer.id)) {
        return
    }
    offers_stor.push(offer)
    localStorage.setItem(
        "offers_stor",
        JSON.stringify(offers_stor)
    )
    
}
