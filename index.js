//Tìm kí tự chung giữa 2 chuỗi
function solve(s1, s2) {
    let temp = 0
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                s2 = s2.replace(s1[i], '')
                temp++
                break;
            }
        }
    }
    return temp
}

//mảng đẹp
function perfectArray(s) {
    let newArray = s.split(' ')
    for (let i = 1; i <= newArray.length - 2; i++) {
        let sum1 = 0
        let sum2 = 0
        for (let j = 0; j < newArray.length; j++) {
            if (j < i) {
                sum1 += +newArray[j]
            } else if (j > i) {
                sum2 += +newArray[j]
            }
        }
        console.log(sum1, sum2)
        if (sum1 === sum2) {
            return true
        }
    }
    return false
}

// Số nguyên tố trong mảng 2 chiều
function solve(arr) {
    let arrS = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (ktraSNT(arr[i][j])) {
                arrS.push(arr[i][j])
            }
        }
    }
    if (arrS.length === 0) {
        return [-1]
    } else {
        return [...new Set(arrS.sort((a, b) => {
            return a - b
        }))]
    }
}

function ktraSNT(n) {
    if (n === 2) {
        return true
    } else if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

//đếm số vòng
function countNumberCircle(l, r) {
    let temp = 0
    for (let i = l; i <= r; i++) {
        if (`${i}`.length === 1) {
            temp++
        } else if (`${i}`[0] === `${i}`[`${i}`.length - 1]) {
            temp++
        }
    }
    return temp
}

//Tìm số lớn thứ nhì
function findIndexSecondHighest(s) {
    let arr = s.split(' ')
    let newArray = Array.from(new Set([...arr].sort((a, b) => {
        return b - a
    })))
    return arr.indexOf(newArray[1])
}

//Đếm kí tự
function countDiffChar(s) {
    return new Set(s.split('')).size
}

//Xây mảng “prefix”
function buildArray(s) {
    let arr = s.split(' ')
    let b = []
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += +arr[i]
        b.push(temp)
    }
    return b
}

//Mảng chứa số liên tiếp
function findIncreaseArray(s) {
    let arrS = Array.from(new Set(s.split(' ').sort((a, b) => {
        return a - b
    })))
    let newArray = []
    for (let i = +arrS[0]; i <= +arrS[arrS.length - 1]; i++) {
        if (arrS.indexOf(`${i}`) === -1) {
            newArray.push(i)
        }

    }
    return newArray
}


// Kiểm tra tần số xuất hiện của phần tử
function checkCountElement(s) {
    let arrS = s.split(' ')
    let newArr = Array.from(new Set(s.split(' ')))
    let arrCount = []
    for (let i = 0; i < newArr.length; i++) {
        let temp = 0
        for (let j = 0; j < arrS.length; j++) {
            if (newArr[i] === arrS[j]) {
                temp++
            }
        }
        arrCount.push(temp)
        if (arrCount.length >= 2) {
            if (arrCount[0] !== arrCount[arrCount.length - 1]) {
                return 0
            }
        }
    }
    return 1
}

// Sắp xếp mảng các xâu kí tự theo độ dài
//cách 1
function sortStringWithLength(s) {
    let arrS = s.split(' ')
    for (let i = 0; i < arrS.length; i++) {
        for (let j = i + 1; j < arrS.length; j++) {
            if (arrS[i].length > arrS[j].length) {
                let temp = arrS[i]
                arrS[i] = arrS[j]
                arrS[j] = temp
            }
        }
    }
    return arrS.join(' ')
}

//cách 2
function sortStringWithLength(s) {
    let arrS = s.split(' ')
    return arrS.sort((a, b) => {
        return a.length - b.length
    }).join(' ')
}

//Số cuối cùng của n!
function findLastNumber(a) {
    let tich = 1
    let tich2
    for (let i = a; i > 1; i--) {
        tich *= i
    }
    tich2 = `${tich}`
    do {
        tich2 = tich2.replace("0", '')
    } while (tich2[tich2.length - 1] === '0')
    return tich2[tich2.length - 1]
}

//Kiểm tra cấp số cộng
function checkPlusLevel(s) {
    let arrS = s.split(' ')
    let d = arrS[1] - arrS[0]
    for (let i = 0; i < arrS.length - 1; i++) {
        if (+arrS[i + 1] - +arrS[i] !== d) {
            return 0
        }
    }
    return 1
}

//Liệt kê phần tử bắt đầu là số lẻ
function getOddHeadNumbers(s) {
    let arrS = s.split(' ')
    let newArr = []
    for (let i = 0; i < arrS.length; i++) {
        if (+arrS[i][0] % 2 !== 0) {
            newArr.push(arrS[i])
        }
    }
    if (newArr.length === 0) {
        return [-1]
    }
    return newArr
}

// Tìm số xa số x nhất
function findNumber(s, x) {
    let arrS = s.split(' ')
    let sum = 0
    let temp = Math.abs(+arrS[0] - x)
    let index = 0
    for (let i = 1; i < arrS.length; i++) {
        sum = Math.abs(+arrS[i] - x)
        if (sum > temp) {
            temp = sum
            index = i
        }
    }
    return arrS[index]
}

//điểm chuyển tiếp
function solve(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return i + 1
        }
    }
    return -1
}

//hình vuông
function solve(n) {
    return Math.floor(Math.sqrt(n))
}

//Trung bình cộng 5
function solve(arr) {
    let sum = arr.reduce((a, b) => a + b)
    let tbc = Math.floor(sum / arr.length)
    let newArray = arr.filter((item) => {
        return item < tbc
    })
    return [tbc, newArray.length]
}

// Số dư (REMAINDER)
function solve(B, P, M) {
    return Math.pow(B, P) % M
}

// Chữ Số La Mã
function valuerRoman(char) {
    if (char === 'I') return 1;
    if (char === 'V') return 5;
    if (char === 'X') return 10;
    if (char === 'L') return 50;
    if (char === 'C') return 100;
    if (char === 'D') return 500;
    if (char === 'M') return 1000;
    return -1;
}

function sovle(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let s1 = valuerRoman(str[i]);
        if (i + 1 < str.length) {
            let s2 = valuerRoman(str[i + 1]);
            if (s1 >= s2) {
                sum += s1;
            } else {
                sum += s2 - s1;
                i++;
            }
        } else {
            sum += s1;
            i++;
        }
    }
    return sum;
}

// Cộng nhị phân
function solve(a, b) {
    if (a === "") return b;
    if (b === "") return a;
    if (a.length > b.length) return solve(b, a);
    let strArr = [];
    let carry = "0";
    for (let i = 0; i < b.length; i++) {
        let aChar = i < a.length ? a.charAt(a.length - 1 - i) : '0';
        let bChar = b.charAt(b.length - 1 - i);
        let curr;
        if (aChar !== bChar) {
            curr = carry === '1' ? '0' : '1';
        } else {
            curr = carry;
            carry = aChar;
        }
        strArr.unshift(curr);
    }
    if (carry === '1') strArr.unshift(carry);
    return strArr.join("");
}

// Chuỗi Palindrome 1
function solve(s) {
    let flag = "True"
    let newArr = s.toLowerCase().split('')
    let newString = newArr.filter((item) => {
        return item.match(/\w/)
    }).join('')
    if (!check(newString)) {
        flag = "False"
    }
    return flag
}

function check(string) {
    if (string.length <= 1) {
        return true
    }
    if (string[0] === string[string.length - 1]) {
        return check(string.substring(1, string.length - 1))
    } else return false
}

//Dấu ngoặc đơn
function solve(s) {
    let array = [];
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") array.push(")"); else if (s[i] === "[") array.push("]"); else if (s[i] === "{") array.push("}"); else if (s.length === 0 || array[array.length - 1] !== s[i]) return 'False'; else array.pop();
    }
    if (array.length === 0) {
        return 'True'
    }
}

// Số xấu
function solve(s) {
    for (let i = 2; i <= s; i++) {
        while (s % i === 0 && check(i)) {
            s = s / i
            if (i > 5) return "False"
        }
    }
    return "True"
}

function check(n) {
    if (n <= 1) return false
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

//Tìm số trong một dãy số
function getNumber(number) {
    let arrNumber = []
    for (let i = 0; i <= number; i++) {
        if (i <= 10) {
            arrNumber.push(`${i}`)
        } else {
            let number = `${arrNumber[arrNumber.length - 1]}`.split('')
            let lengthNewNumber = number[0] === '9' ? arrNumber[arrNumber.length - 1].length + 1 : arrNumber[arrNumber.length - 1].length
            console.log(number[0])
            console.log('length =' + lengthNewNumber)
            let newNumber = number[0] === '9' ? `1` : `${+number[0] + 1}`
            for (let j = 0; j <= 9; j++) {
                let temp = 0
                for (let k = 0; k < number.length; k++) {
                    if (newNumber === number[k]) {
                        newNumber = `${+newNumber + 1}`
                        break;
                    }
                }
                for (let k = 0; k < number.length; k++) {
                    if (`${j}` === number[k]) {
                        temp++
                        break;
                    }
                }
                if (temp === 0) {
                    while (newNumber.length < lengthNewNumber) {
                        newNumber += `${j}`
                    }
                    break
                }
            }
            arrNumber.push(newNumber)
        }
    }
    return +arrNumber[arrNumber.length - 1]
}

// Sửa chuỗi nối liền
function insertSpace(s) {
    let arrS = s.split('')
    for (let i = 0; i < arrS.length; i++) {
        if (arrS[i].match(/[A-Z]/)) {
            if (i === 0) {
                arrS[i] = arrS[i].toLowerCase()
            } else {
                arrS[i] = arrS[i].toLowerCase()
                arrS.splice(i, 0, ' ')
            }
        }
    }
    return arrS.join('')
}

//Xếp hàng với cây
function solve(s) {
    let mp = new Map()
    let arrS = s.split(' ')
    let newArr = []
    arrS.forEach((item, index) => {
        mp.set(index, item)
    })
    for (const [key, value] of mp) {
        if (value !== '-1') {
            newArr.push(value)
        }
    }
    newArr.sort((a, b) => {
        return a - b
    })
    for (const [key, value] of mp) {
        if (value === '-1') {
            newArr.splice(key, 0, value)
        }
    }
    return newArr.join(' ')
}

// Ký tự trùng lặp
function findChar(s) {
    let arrS = s.split('')
    let newArr = Array.from(new Set(arrS))
    let arr = []
    console.log(newArr)
    for (let i = 0; i < newArr.length; i++) {
        let count = 0
        for (let j = 0; j < arrS.length; j++) {
            if (newArr[i] === arrS[j]) {
                count++
                if (count >= 2) break
            }
        }
        if (count >= 2) {
            arr.push(newArr[i])
        }
    }
    if (arr.length === 0) {
        return ['-1']
    } else return arr.sort()
}

// Mảng con trùng lặp
function solve(parentString, childString) {
    let arrP = parentString.split(' ')
    let arrC = childString.split(' ')
    let arr = []
    for (let i = 0; i < arrC.length; i++) {
        let count = 0
        for (let j = 0; j < arrP.length; j++) {
            if (arrC[i] === arrP[j]) {
                count++
            }
        }
        arr.push(count)
    }
    return Math.min(...arr)
}

//Đầu tư ngoại tệ
function getMoneyInvestment(e, n) {
    let arrE = e.split(' ').map((value) => {
        return parseInt(value, 10)
    })
    let arrMua = []
    let arrBan = []
    let maxMua = 0
    let maxBan = 0
    for (let i = 0; i < arrE.length - 1; i += 2) {
        if (n >= arrE[i]) {
            arrMua.push(arrE[i])
        }
        arrBan.push(arrE[i + 1])
        maxMua = Math.max(...arrMua)
        maxBan = Math.max(...arrBan)
        if (maxBan >= maxMua) {
            arrMua.forEach((item) => {
                n += (maxBan - item)
            })
        }
    }
    return n
}

//Thầy Ba tặng bút
function findMin(x, y, s) {
    let du = s%(x+y)
    let thuong = (s - du)/(x+y)
    return (x*thuong)+ du
}