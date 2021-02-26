// You got this!
/**You’re going to store the gameboard as an array inside of a Gameboard object, 
 * so start there! Your players are also going to be stored in objects… and you’re 
 * probably going to want an object to control the flow of the game itself. */


const gameBoard = (() => {
    const _board = {
        spaces: new Array(9)
    };
    return {
        _board
    }
})()
console.log('testing:', gameBoard)


const player = (name, marker) => {


}

