import {combineReducers} from "redux";
import kakao from './kakao';

const rootReducer = combineReducers({
    kakao
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
