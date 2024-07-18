export function getWl() {
    let x = JSON.parse(localStorage.getItem('watchlist'))
    return x
}

export function setWl(x) {
    localStorage.setItem('watchlist', JSON.stringify(x))
}

export function getCl() {
    let x = JSON.parse(localStorage.getItem('completedlist'))
    return x
}

export function setCl(x) {
    localStorage.setItem('completedlist', JSON.stringify(x))
}

export function addtoWl(movie) {
    console.log(movie)
    let watchlist = getWl()
    let newWl = [...watchlist, movie]
    setWl(newWl)
}

export function addtoCl(movie) {
    console.log(movie)
    let completedlist = getCl()
    let newCl = [...completedlist, movie]
    setCl(newCl)
}