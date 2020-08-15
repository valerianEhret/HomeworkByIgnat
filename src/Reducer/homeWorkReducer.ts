

export type ManType = {
    id: string
    name: string
    age: number
}


export type ActionType = {
    type: string
    payload: any
}

export const hwReducer =
    (state: Array<ManType>, action: ActionType) => {
        switch (action.type) {
            case "SORT":
                if (action.payload === "up") {
                    return [...state].sort(function (a,b) {
                        if (a.name<b.name) return -1
                        if (a.name>b.name) return 1
                        return 0
                    })
                }
               if (action.payload === "down") {
                   return [...state].sort(function (a,b) {
                       if (a.name<b.name) return 1
                       if (a.name>b.name) return -1
                       return 0
                   })
               }
            case "CHECK":
                if (action.payload === "18") {
                    return [...state].filter( el=> el.age>18 )
                }
            default:return  state
        }
    };

export const sortUpAC = () => {
    return {type: 'SORT', payload: 'up'}
}

export const sortUpDown = () => {
    return {type: 'SORT', payload: 'down'}
}

export const checkOver18 = () => {
    return {type: 'CHECK', payload: '18'}
}