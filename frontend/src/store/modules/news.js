const news = {
    state: {
        status: 'listen',
        news: []
    },
    mutations: {
        NewsRequest: (state) => {
            state.status = 'loading'
        },
        NewsSuccess: (state, news) => {
            state.news = [...state.news, ...news]
        },
        NewsError: (state, error) => {
            state.status = error
        }
    },
    actions: {
        GetNews ({commit}, url) {
            commit('NewsRequest')
            fetch('https://api.myjson.com/bins/m4a6k')
                .then(response => response.json())
                .then(result => {
                    commit('NewsSuccess', result.news)
                })
                .catch(error => commit('NewsError', error))
        }
    }
}

export default news
