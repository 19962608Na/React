import {createStore} from 'redux';
import { Reducer, initialState } from './reducer'

//hàm ConfigureStore là bắt buộc vì đó là cách định cấu hình store
export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}
//khi ai đó gọi ConfigureStore thì nó sẽ cấu hình Redux Store
