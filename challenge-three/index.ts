import { person } from './person'
console.log(person)

import { greet } from './person'

export let salutations = greet(person.firstName)
