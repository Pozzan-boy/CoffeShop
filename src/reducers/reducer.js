const initialState = {
    coffees: [],
    bestCoffees: [],
    coffeesLoadingStatus: 'idle',
    bestCoffeesLoadingStatus: 'idle',
    filters: [],
    currentFilters: [],
    filterString: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'COFFEES_FETCHING':
            return {
                ...state,
                coffeesLoadingStatus: 'loading'
            }
        case 'COFFEES_FETCHED':
            return {
                ...state,
                coffees: action.payload,
                coffeesLoadingStatus: 'idle'
            }
        case 'COFFEES_FETCHING_ERROR' :
            return {
                ...state,
                coffeesLoadingStatus: 'error'
            }
        case 'BEST_COFFEES_FETCHING':
            return {
                ...state,
                bestCoffeesLoadingStatus: 'loading'
            }
        case 'BEST_COFFEES_FETCHED':
            return {
                ...state,
                bestCoffees: action.payload,
                bestCoffeesLoadingStatus: 'idle'
            }
        case 'BEST_COFFEES_FETCHING_ERROR' :
            return {
                ...state,
                bestCoffeesLoadingStatus: 'error'
            }
        case 'SET_FILTERS' :
            return {
                ...state,
                filters: action.payload
            }
        case 'SET_CURRENT_FILTERS':
            return {
                ...state,
                currentFilters: action.payload
            }
        case 'SET_FILTER_STRING':
            return {
                ...state,
                filterString: action.payload
            }
        default: return state
    }
}

export default reducer;