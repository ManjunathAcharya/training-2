
/**
 * 
 * @param {*} num 
 */
function fizBuz(num){
    if(num%3===0 && num%5===0){
        return 'fizz buzz';
    }
    else if(num%5===0){
        return 'buzz';
    }else if(num%3===0){
        return 'fizz';
    }
    return num;
}

module.exports = fizBuz;
