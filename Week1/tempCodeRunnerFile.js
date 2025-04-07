function characterScript(code) { 
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {  // use of .some which is another high order function that returns valu
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}