
const SET_CATEGORIES = 'categories/SET_CATEGORIES'


const setAllCategoriesInStore = (categories) => ({
    type: SET_CATEGORIES,
    categories
});


const initialState = {};

export const getCategories = () => async (dispatch) => {
    const response = await fetch('/api/categories')
    if (response.ok) {
        const data = await response.json();
        const categoriesArray = data.categories
        dispatch(setAllCategoriesInStore(categoriesArray))
    }
}


export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_CATEGORIES:
            newState = {}
            action.categories.forEach((category) => {
                newState[category.id] = category
            })
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
}
