function Opposite(string) {
    let temp_string = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase()) {
            temp_string += string[i].toLowerCase()
        }
        else {
            temp_string += string[i].toUpperCase()
        }
    }
    return temp_string
}


// module.exports = Nani
module.exports = {
    Opposite: Opposite,
};
