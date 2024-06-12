const anagramChecker = (word1, word2) => {

    // check that they have the same length;
    let finalWord1 = word1.toLowerCase().trim().replace(/\s/g,"");
    let finalWord2 = word2.toLowerCase().trim().replace(/\s/g,"");
    
    if(finalWord1.length !== finalWord2.length) {
        return false;
    }

    for(let i = 0; i < finalWord2.length; i++){
        if(!finalWord2.includes(finalWord1[i])){
            return false;
        }
    }

    return true;
}
