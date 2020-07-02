import test from 'ava'
import { addThree, addTwo } from './addition'

test('Add two numbers sums two numbers', (t) => {
    t.is(addTwo(1, 2), 3)
})

test('Add three numbers sums 3 numbers', (t) => {
    t.is(addThree(1, 2, 3), 6)
})
