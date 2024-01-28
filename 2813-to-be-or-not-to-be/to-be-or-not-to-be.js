/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        value: val,
        toBe: function(params){
            if(this.value === params){
                return true
            }
            throw new Error('Not Equal')
        },
        notToBe: function(params){
            if(this.value === params){
                throw new Error('Equal')
            }
            return true
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */