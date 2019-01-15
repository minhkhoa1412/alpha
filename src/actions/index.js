import {FETCH_DATA,FETCH_DATA_FULFILLED} from '../vars/constant'

//actions
export const fetchData = () => ({type: FETCH_DATA})

export const fetchDataFulfilled = (payload) => ({
  type: FETCH_DATA_FULFILLED,
  payload
})