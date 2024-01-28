/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc,curr)=>{
        const value = fn(curr);

    if(!acc[value]){
        acc[value] =[]
    }

    acc[value].push(curr)

    return acc;

    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */