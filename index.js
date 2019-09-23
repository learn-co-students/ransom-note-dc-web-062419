// magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
// note = "handitover"


function buildHistogram(arr) {
    
    let newObj = {}

    arr.forEach(element => {
        if (newObj[element]){
            newObj[element] += 1
        }
        else{
            newObj[element] = 1
        }

    });

    return newObj

}

function canBuildNote(magazine, note) {
   let results = buildHistogram(magazine)
    let noteSplit = note.split('')
  let a = true
  noteSplit.forEach(element => {
        if ( results[element] && results[element] > 0 ){
            results[element] -= 1 
        } 
        else{
            a = false   
        }
    })
    return a
    
}