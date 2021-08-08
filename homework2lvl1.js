//xndir 1

function newArr (arr, elem) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > elem) {
            res.push (arr[i])
        }
    }
    return res
}

//xndir 2
function getEven (num1, num2) {
    debugger 
        let newArray = []
        let res = []
        let arr = [];
      for (let i = num1; i < num2; i++) {
        arr.push(i);
      }
      for (let j = 0; j < arr.length; j++) {
                newArray.push(String (arr[j]))
                for (let h = 0; h < newArray.length; h++) {
                        if(h % 2 === 0) {
                            res.push (h)
                        }
                    
                }
            }
        return res 
        }
//xndir 3
function isOdd(number) {
    let res = []
    let arr = []
    arr.push(String(number ))
  for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
            if(k % 2 !== 0) {
                continue;
                console.log(true)
            }else {
                console.log (false)
            }
        }
    }
    return res 
}



//xndir 4
function smallestPositive (arr) {
let smallest = arr[0];

for(let i=1; i < arr.length; i++){
    if(arr[i] < smallest && arr[i] <= 0){
        smallest = arr[i];   
    }
}

return smallest
}

//xndir 5

function findIndex (arr) {
    let res 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            continue;
        } else {
            res = arr.indexOf(i)
        }
    }
    return res
}