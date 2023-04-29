var isValid = function(s) {
    const parentheses_counters = {
        "(": 0,
        "{": 0,
        "[": 0
    };

    for (let char of s) {
        switch (char) {
            case "(":
                parentheses_counters["("]++;
                break;
            case ")":
                parentheses_counters["("]--;
                break;
            case "{":
                parentheses_counters["{"]++;
                break;
            case "}":
                parentheses_counters["{"]--;
                break;
            case "[":
                parentheses_counters["["]++;
                break;
            case "]":
                parentheses_counters["["]--;
                break;
        }
        
        if (parentheses_counters["("] < 0 || 
            parentheses_counters["{"] < 0 || 
            parentheses_counters["["] < 0
        ) {
            return false;
        }
    }
    if (parentheses_counters["("] === 0 && 
        parentheses_counters["{"] === 0 &&
        parentheses_counters["["] === 0
    ) {
        return true;
    }
    console.log(parentheses_counters);
    return false
};

console.log(isValid("()"));