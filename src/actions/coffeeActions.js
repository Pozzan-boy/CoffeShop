export const coffeesFetching = () => {
    return {
        type: 'COFFEES_FETCHING'
    }
}

export const coffeesFetched = (coffees) => {
    return {
        type: 'COFFEES_FETCHED',
        payload: coffees
    }
}

export const coffeesFetchingError = () => {
    return {
        type: 'COFFEES_FETCHING_ERROR'
    }
}

export const bestCoffeesFetching = () => {
    return {
        type: 'BEST_COFFEES_FETCHING'
    }
}

export const bestCoffeesFetched = (bestCoffees) => {
    return {
        type: 'BEST_COFFEES_FETCHED',
        payload: bestCoffees
    }
}

export const bestCoffeesFetchingError = () => {
    return {
        type: 'BEST_COFFEES_FETCHING_ERROR'
    }
}

export const setFilters = (filters) => {
    return {
        type: 'SET_FILTERS',
        payload: filters
    }
}

export const setCurrentFilters = (filters) => {
    return {
        type: 'SET_CURRENT_FILTERS',
        payload: filters
    }
}

export const setFilterString = (string) => {
    return {
        type: 'SET_FILTER_STRING',
        payload: string
    }
}