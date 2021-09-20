const {searchNum,checkNum} = require('./tasks')

describe('182 task', () =>{
    test('numbers are divisible by 5 and are not divisible by 7', () =>{
        const array = [-365, 411, 415, 31815, 31810]
        const result = {
            array: [-365, 415, 31810],
            length: 3,
            sum: 31860
        }
        expect(searchNum()).toBeUndefined()
        expect(searchNum([])).toEqual({array: [], length: 0, sum: 0})

        expect(searchNum(array)).toBeDefined()
        expect(searchNum([411])).toEqual({array: [], length: 0, sum: 0})
        expect(searchNum([415])).toEqual({array: [415], length: 1, sum: 415})
        expect(searchNum([415, -415])).toEqual({array: [415, -415], length: 2, sum: 0})
        expect(searchNum(array)).toEqual(result)
    })
})

describe('243 B', () =>{
    test('should return sum of two numbers squared', () =>{
        expect(checkNum()).toBeUndefined()
        expect(checkNum(1)).toBeDefined()

        expect(checkNum(0)).toBe('the number is negative or 0')
        expect(checkNum(-1)).toBe('the number is negative or 0')
        expect(checkNum(1)).toBe('cannot have the sum of two numbers squared')
        expect(checkNum(2)).toEqual([[1,1]])
        expect(checkNum(3)).toEqual('cannot have the sum of two numbers squared')
        expect(checkNum(50)).toEqual([[7,1], [5,5]])
        expect(checkNum(145)).toEqual([[12,1], [9,8]])
        expect(checkNum(100)).toEqual([[8,6]])
    })
})