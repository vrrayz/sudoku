
export const useRemapNumbers = (boxNumbers: number[][]) =>{
    let idCount = 0;
    const remappedNumbers = boxNumbers.map(numberRows => {
            return numberRows.map(number => {
                const displayStatus = ['none','block'];
                idCount += 1;
                return {id: idCount ,'number': number, 'display': displayStatus[Math.floor(Math.random() * 2)]}
            })
        })

    return remappedNumbers;
}