import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./modules";

export default (function initializeStore(initialState = {}) {
    const middleware = [thunk];
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            // other store enhancers if any
        ),
    );
    return store;
})();
