function bhaskara (a, b, c){
    let delta = Math.pow(b, 2) - (4*a*c)
    let bhask = (-b + delta)/(2*a)
    return bhask
}
console.log (bhaskara(1, 4, -1)
)