function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(string = "go to the office"){
    return `This Monday, I will ${string}.`
}

function wrapAdjective(wrap = "*"){
    return function (adjective = "special") {
       return `You are ${wrap}${adjective}${wrap}!`
    }
}
