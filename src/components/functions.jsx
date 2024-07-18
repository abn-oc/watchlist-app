export function getWl() {
    let x;
    try {
        x = JSON.parse(localStorage.getItem('watchlist'))
    } catch(error) {
        return []
    } 
    return x
}

export function setWl(x) {
    localStorage.setItem('watchlist', JSON.stringify(x))
}

export function getCl() {
    let x;
    try {
        x = JSON.parse(localStorage.getItem('completedlist'))
    } catch(error) {
        return []
    } 
    return x
}

export function setCl(x) {
    localStorage.setItem('completedlist', JSON.stringify(x))
}

export function addtoWl(movie) {
    console.log(movie)
    let watchlist = getWl()
    let newWl;
    if(watchlist !== null) newWl = [...watchlist, movie]
    else newWl = [movie]
    setWl(newWl)
}

export function addtoCl(movie) {
    console.log(movie)
    let completedlist = getCl()
    let newCl;    
    if(completedlist !== null) newCl = [...completedlist, movie]
    else newCl = [movie]
    setCl(newCl)
}

export function delfromWL(movie) {
    let watchedlist = getWl()
    let newWl = watchedlist.filter(i => i.imdbID !== movie.imdbID)
    setWl(newWl)
}

export function delfromCL(movie) {
    let completedlist = getCl()
    let newCl = completedlist.filter(i => i.imdbID !== movie.imdbID)
    setCl(newCl)
}