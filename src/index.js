module.exports = function reverse(n) {
    let res = n.toString().split('').reverse().filter(item => item >= 0).join('')
    return Number(res)
}
