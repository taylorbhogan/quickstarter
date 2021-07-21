const SET_SUB_CATEGORIES = 'subCategories/SET_SUB_CATEGORIES'


const setAllSubCategoriesInStore = (subCategories) => ({
    type: SET_SUB_CATEGORIES,
    subCategories
});


const initialState = {};

export const getSubCategories = () => async (dispatch) => {
    // console.log('you made it here')
    const response = await fetch('/api/subcategories')
    if (response.ok) {
        const data = await response.json();
        const subCategoriesArray = data.sub_categories
        // console.log("*******************************************!!!!!", data)
        // console.log("*******************************************!!!!!", data.sub_categories[0])
        // subCategoriesArray.forEach(cat => console.log(cat))
        dispatch(setAllSubCategoriesInStore(subCategoriesArray))
    }
}


export default function reducer(state = initialState, action) {
    let newState;
    // console.log('NOW YOU"RE HERE', action.subCategories)
    // action.subCategories.forEach(cat => console.log(cat))
    switch (action.type) {
        case SET_SUB_CATEGORIES:
            newState = {}
            action.subCategories.forEach((subCategory) => {
                newState[subCategory.id] = subCategory
            })
            return {
                ...state,
                ...newState
            }
        default:
            return state;
    }
}
