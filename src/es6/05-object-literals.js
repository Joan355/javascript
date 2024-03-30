// enhanced objects

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId

    };
}

console.log(newUser("Joan", 24, "CO", 1));