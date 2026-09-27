
export function search(offers, value) {

    const result = offers.filter((offer) =>
        offer.titre.toLowerCase().includes(value.toLowerCase())
    )

    return result
}
export function sort(offers) {
    const result = offers.sort((a, b) =>
        new Date(a.datePublication) - new Date(b.datePublication)
    )

    return result
}
export function searsh_bytec(offers, value) {

    const result = offers.filter((offer)=> offer.technologies.includes(value))
    return result
}
