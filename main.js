




// Homework 2 

const user = {
    banks: ['TBC BANK', 'Bank of Georgia', 'Bank of America', 'Bank of England'],
    address: '1 Chavchavadze Avenue',
    city: 'Tbilisi'
}

const {banks, address, city = {}} = user; 

console.log(city)




// Homework 3 

const agent = {
    name: 'George',
    lastName: 'Miller',
    age: 37,
    nickname: 'Magician',
    profile: {
        date: 'June 4',
        deadline: 'January 3'
    }
}

const myAgent = {
    ...agent,
    profile: {
        ...agent.profile
    }
}
 
agent.profile.date = 'August 17'

console.log(agent)
console.log(myAgent)



