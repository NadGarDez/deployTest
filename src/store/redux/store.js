import {createStore, combineReducers, applyMiddleware} from 'redux';

import productSlice from './slices/productSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSagas'
 const rootReducer = combineReducers(
     {
        products:productSlice
     }
 )

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

/*
export default configureStore({
  reducer: {
      reducer:{
        products:productSlice
      },
  }
})

*/
sagaMiddleware.run(rootSaga);

export default store;
