
export function search(offers, value) {

    const result = offers.filter((offer) =>
        offer.titre.toLowerCase().includes(value.toLowerCase())
    )
    
    return result
}