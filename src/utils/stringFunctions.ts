
const stringFunctions = {
    GetNonRepeatingChar:(string:string) => {
        for(let index = 0; index < string.length; index++) {
            let lowercaseString = string.toLowerCase();
            let characterIndex = lowercaseString.charAt(index)
            if(lowercaseString.indexOf(characterIndex) === lowercaseString.lastIndexOf(characterIndex)){
                return characterIndex
            }
        }
        return 'Oops! No Non-Repeating characters have been found!'
    }

}
module.exports = stringFunctions
