import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PRODUCTS_API_URL } from '../../constans/constants';
import { setProducts } from '../redux/slices/productSlice';



function* fethAllProducts(){
    const products  = yield call(axios.get, PRODUCTS_API_URL);
    const reduced = products.data.reduce(
        (prev,current)=>{
            return {...prev, [current.id]:current}
        },
        {}
    )
    
    console.log(reduced);
    yield put(setProducts({products:reduced}))
}

export function* watchFetchAllProducts(){
    yield takeEvery('PRODUCTS/FETCH_ALL', fethAllProducts);
}


function* fetchOneProduct({payload}){
    const product  = yield call(axios.get,`${PRODUCTS_API_URL}/${payload}`);
    console.log(product);
}

export function* watchFetchOneProduct(){
    yield takeEvery('PRODUCTS/FETCH_ONE', fetchOneProduct);
}
