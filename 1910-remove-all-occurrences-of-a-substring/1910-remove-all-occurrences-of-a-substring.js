/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    //sab sy pehle jo part nikalna hai wo select karo 
   while (s.includes(part)) {
        let index = s.indexOf(part);
        // Remove the part by taking everything before and after it
        s = s.slice(0, index) + s.slice(index + part.length);
        //  ↑ No 'let' here! We're updating the parameter 's'
    }
    return s;
};