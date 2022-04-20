import { all } from 'redux-saga/effects';
import {watchFetchAllProducts, watchFetchOneProduct} from './productsFetching';


export default function* rootSaga() {
    yield all([
        watchFetchAllProducts(),
        watchFetchOneProduct() 
    ])
  }