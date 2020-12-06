import ACTIONS from './actionsTypes.js'
import genres from '../data/MovieGenres.js'

const viewReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_EDIT_MODAL: {
            const visible = action.payload.visible;
            return {
                ...state,
                showEdit: visible
            };
        }
        case ACTIONS.SHOW_DELETE_MODAL: {
            const visible = action.payload.visible;
            return {
                ...state,
                showDelete: visible
            };
        }
        default: { // need this for default case
            return state;
        }
    }
}

const moviesReducer = (state = {}, action) => {
    switch (action.type) {
        case (ACTIONS.SET_SEARCH_TXT): {
            let txt = action.payload.txt;
            return {
                ...state,
                searchTxt: txt
            };
        }
        case (ACTIONS.SET_GENRE_FILTER): {
            let filter = action.payload.filter;

            return {
                ...state,
                genreFilter: filter,
                movies: filter === genres.ALL ? state.fetchedMovies : state.fetchedMovies.filter(movie => movie.genres.includes(filter))
            };
        }
        case (ACTIONS.SET_ORDER_BY): {
            let order = action.payload.order;
            return {
                ...state,
                orderByVal: order,
                movies: state.movies.sort((a, b) => (a[order] > b[order]) ? 1 : -1)
            };
        }
        case (ACTIONS.LOAD_MOVIES): {
            let movies = action.payload.movies.data;
            return {
                ...state,
                movies: movies,
                fetchedMovies: movies,
            }
        }
        default: {
            return state;
        }
    }
}

export { viewReducer, moviesReducer };
