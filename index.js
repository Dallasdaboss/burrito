// Availible under The GNU General Public License v3.0
// More Liscense Info at https://www.gnu.org/licenses/gpl-3.0.en.html


/** 
* @param {String} data
* @returns {Object}
*/
function stuff(data) {
    var text = String(data)
    var res = {}

    for (let i = 0; i < text.length; i++) {
        res[text[i]] = (res[text[i]] || new Array())
        res[text[i]].push(i)
    }
    return Object.assign({length: text.length}, res)
}

/**
* 
* @param {Object} data 
* @returns {String}
*/
function unstuff(data) {
    var result = ""
    const keys = Object.keys(data).filter(key => typeof(data[key]) == 'object')
    for (let i = 0; i < data.length; i++) {
       result += keys.find(key => data[key].includes(i))
    }
    return result
}

module.exports = { Burrito }