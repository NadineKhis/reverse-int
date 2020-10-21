module.exports = function reverse(n) {
    let res = (Array.from(n.toString())).reverse();
    if (res[res.length -1] === '-')
        res.pop()
    return res.join('');
}
