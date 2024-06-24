
const SummaryApi = {
    signUp: {
        url: `${process.env.REACT_APP_BACKEND_URL}/api/signup`,
        method: 'POST'
    },
    login: {
        url: `${process.env.REACT_APP_BACKEND_URL}/api/login`,
        method: 'POST'
    }
}

export default SummaryApi;