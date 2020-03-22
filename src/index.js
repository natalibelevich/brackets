module.exports = function check(str, bracketsConfig) {
    const regexps = bracketsConfig.map(bracketsArr => bracketsArr.join(''));

    const removeInside = (str) => {
        let buffer = str;
        regexps.forEach(regexp => buffer = buffer.replace(regexp, ''));
        return str === buffer ? buffer : removeInside(buffer);
    };

    return !removeInside(str).length;
};
