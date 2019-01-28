import Cookie from 'js-cookie';
const stateToSave = 'state';

export const loadState = () => {
    try {
        const serializedState = Cookie.get(stateToSave);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        Cookie.set(stateToSave, serializedState, { expires: 1 });
    } catch (err) {
        console.error(err);
    }
}