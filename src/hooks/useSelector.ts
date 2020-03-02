import {RootState} from "../modules";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from 'react-redux';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

