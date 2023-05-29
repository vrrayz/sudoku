
export const useRemapNumbers = (boxNumbers: number[][]) =>{
    const remappedNumbers = boxNumbers.map(numberRows => {
        return numberRows.map(number => {
            const displayStatus = ['none','block'];
            return {'number': number, 'display': displayStatus[Math.floor(Math.random() * 2)]}
        })
    })

    return remappedNumbers;
}