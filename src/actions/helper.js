export default function actionCreator(type, ...argNames) {
    return (...args) => {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}
