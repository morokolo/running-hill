//import app from '../app';
const functions = require('../utils/stringFunctions')

describe('Runninghill App', () => {
    it('GetNonRepeatingChar() should return the character b from string',  () => {
        // Assert
        const expected: string = 'u';
        const string: string = 'rrrunninghill';
        // Act
        const results = functions.GetNonRepeatingChar(string)
        // Arrange
        expect(results).toBe(expected)
    })

    it('GetNonRepeatingChar() should return no repeating character from string ',  () => {
        // Assert
        const expected: string = 'Oops! No Non-Repeating characters have been found!';
        const string: string = 'rruunningghhill';
        // Act
        const results = functions.GetNonRepeatingChar(string)
        // Arrange
        expect(results).toBe(expected)
    })
})
