const stateToSave = 'cart';

export const loadState = () => {
    try {
        const serializedState = localstorage.getItem(stateToSave);
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
        localStorage.setItem(stateToSave, serializedState);
    } catch (err) {
        console.error(err);
    }
}