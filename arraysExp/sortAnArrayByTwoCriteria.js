function sortArray(params) {
    // params.sort(twoCriteriaSort);

    // function twoCriteriaSort(cur, next) {
    //     if (cur.length === next.length) {
    //         return cur.localeCompare(next);
    //     }
    //     return cur.length - next.length;
    // }
    // return params.sort(twoCriteriaSort).join('\n');
    return params.sort((a, b) =>{
        if(a.length === b.length) {
            return a.localeCompare(b)
        }
        return a.length - b.length;
    }).join('\n');
}

console.log(sortArray(['alpha', 
'beta', 
'gamma']
));

return params.sort((a, b) =>{
    if(a.length === b.length) {
        return a.localeCompare(b)
    }
    return a.length - b.length;
})