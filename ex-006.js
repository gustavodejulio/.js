function jurosSimples(cap, juros, tempo){
    return (cap * juros * tempo)
}

function jurosCompost(cap, juros, tempo){
    return (cap * Math.pow((1 + juros), tempo)).toFixed(2)
}

console.log(jurosSimples(1000, 0.1, 12))
console.log(jurosCompost(1000, 0.1, 12))