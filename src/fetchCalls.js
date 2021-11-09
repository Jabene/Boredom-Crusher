const fetchCalls = {
  getActivity() {
    return fetch('http://www.boredapi.com/api/activity/',)
      .then(activity => activity.json())
  },
}

export default fetchCalls
