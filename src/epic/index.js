// epic
import {ofType} from 'redux-observable'
import {map, mergeMap} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'

import {fetchDataFulfilled} from '../actions'
import {FETCH_DATA,FETCH_DATA_FULFILLED} from '../vars/constant'

export const fetchDataEpic = action$ => action$.pipe(
  ofType(FETCH_DATA),
  mergeMap(action =>
    ajax.getJSON(`https://gist.githubusercontent.com/nvthai/65dc75b2a575498d782748d4d0fabee4/raw/5742d9f7bb71abf4a1cc422c332b75a92e4ffad4/radio_songs.json`)
      .pipe(
        map(response => fetchDataFulfilled(response))
      )
  )
)