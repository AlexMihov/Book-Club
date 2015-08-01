export default function books(state = {}, action = {}) {
    return {
        ...state,
        books: [
            {
                title: 'Bambi'
            }, {
                title: 'Gulivers Reisen'
            }, {
                title: '1984'
            }
        ]
    };
}
