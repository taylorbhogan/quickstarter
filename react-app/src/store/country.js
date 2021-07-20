
const SET_COUNTRIES = 'countries/SET_COUNTRIES'


const setAllCountriesInStore = (countries) => ({
    type: SET_COUNTRIES,
    countries
});


const initialState = {};

export const getCountries = () => async (dispatch) => {
    const response = await fetch('/api/countries')
    if (response.ok) {
        const data = await response.json();
        const countriesArray = data.countries
        dispatch(setAllCountriesInStore(countriesArray))
    }
}


export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_COUNTRIES:
            newState = {}
            action.countries.forEach((country) => {
                newState[country.id] = country
            })
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
}
