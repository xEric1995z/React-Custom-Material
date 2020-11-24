const initState = {
    str: ''
}

export const CustomReducer = (state = initState, action) => {

    switch (action.type) {
        case 'UPDATE_STR':
            return {
                ...state,
                str: 'Custom Str'
            }
        default:
            return state;
    }

}