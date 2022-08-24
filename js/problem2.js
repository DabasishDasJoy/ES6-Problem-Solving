/*
Write an arrow function that recieves an array as parameter(the name of your friends) and return an array with even length names;
*/

const namesWithEvenLength = (friends) =>{
    const freindsWithEvenName = [];
    for(const friend of friends){
        if(friend.length % 2 == 0){
            freindsWithEvenName.push(friend);
        }
    }
    
    return freindsWithEvenName;
};

const friends = ["kartik", "pritu", "shuvo", "anik", "joya", "alok", "sabicun"]; 
console.log(namesWithEvenLength(friends));