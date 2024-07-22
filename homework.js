
// 1.a 印出10個你知道的關鍵字
console.table("1.a\n","var, let, for, switch, case, while, if, else, break, return")



//1.b 宣告一圓周率常數，值為3.14，並取一個適當的常數名稱
var pi = 3.14
console.table("1.b\n",`pi = ${pi}`)



//1.c 宣告兩個變數: 1.用來存你的名字，2.用來存你的年紀，並印出。 請使用適當的變數名
var myName = "趙昱普"
var age = 30
console.table(
    "1.c\n",
    `姓名 : ${myName}, 年紀 : ${age}`,
)



//2.a 請用程式算出 1 天又 10 小時又 17 分又 36 秒，共等於幾秒

var secondsPerDay = 24*60*60
var secondsPerHour = 60*60
var secondsPerMinute = 60

var days = 1
var hours = 10
var minutes = 17
var seconds = 36
console.table(
    "2.a\n",
    `總共 ${days*secondsPerDay + hours*secondsPerHour + minutes*secondsPerMinute + seconds} 秒`,
)



//2.b 請用程式算出 93784 秒，是幾天又幾小時又幾分又幾秒
var totalSeconds = 93784
days = Math.floor(totalSeconds / secondsPerDay)
totalSeconds %= secondsPerDay
hours = Math.floor(totalSeconds / secondsPerHour)
totalSeconds %= secondsPerHour
minutes = Math.floor(totalSeconds/secondsPerMinute)
totalSeconds %= secondsPerMinute
seconds = totalSeconds

console.table(
    "2.b\n",
    `總共 ${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`,
)



//2.c 請用變數及運算式表示: 如果有筆電且有網路，就可以在家工作
let haveLaptop = true
let haveNetwork = true
let workFromHome = false

if(haveLaptop && haveNetwork) workFromHome = true

console.table(
    "2.c\n",
    `if(haveLaptop && haveNetwork) workFromHome = ${workFromHome}`,
)

//2.d Reds 在寫 JavaScript 作業，電腦開機需要 1 分鐘，打開 VS Code 需要 2 分鐘，
//寫 1 題作業需要 3 分鐘，且 Reds 每天都會將電腦關機。
// Reds 分 2 天寫，第一天連續寫 3 題目，第二天連續寫 2 題，
// 請用程式算出 Reds 共花多少時間

let bootTime = 1
let openVsCode = 2
let timePerQuestion = 3
let questionsCountEachDay = [3,2]
let totalMinute = 0
for(let i = 0; i <= questionsCountEachDay.length-1; ++i)
{
    totalMinute += (bootTime + openVsCode + timePerQuestion*questionsCountEachDay[i])
}

console.table(
    "2.d\n",
    `總共花 ${totalMinute} 分鐘`,
)

//2.e 請設計一程式，含有 1 個正整數變數 n，可隨機印出一個介於 1~n 的整數
// #### 提示1: 產生 (偽) 亂數
let n = 5

console.table(
    "2.e\n",
    `n : ${n}, 隨機數 : ${ 1 + Math.trunc(Math.random() * (n))}`,
)

//3.a 有1個正整數n，並印出1~n之內，3的倍數和4的倍數的總和

let totalSum = 0
n = 10
for(let i = 3; i <= n; i += 3) totalSum += i
for(let i = 4; i <= n; i += 4) totalSum += i

console.table(
    "3.a\n",
    `n : ${n}, 總和 : ${totalSum}`,
)



//3.b 請用迴圈印出以下內容
 
// 18 27 36 45 54 63 72 81
// 16 24 32 40 48 56 64
// 14 21 28 35 42 49
// 12 18 24 30 36
// 10 15 20 25
// 8 12 16
// 6  9
// 4

console.table(
    "3.b\n"
)
for(let count = 8; count >= 1; --count)
{
    let lineString = "";
    for(let base = 2, i = 1; i <= count; base++, i++)
    {
        lineString += base*base + (count-i)*base + " "
    }
    console.log(lineString)
}

//3.c 請用迴圈印出以下內容..
 
// 2 5 8 11 14 17 20 23 26 29 32
console.table(
    "3.c\n"
)
let str = ""
for(let i = 2; i <=32; i+=3)
{
    str += i + " "
}
console.log(str)


//3.d 請設計一程式，含有1個正整數變數n，並印出1~n所有質數的總和
n = 17 // 2 + 3 + 5 + 7 + 11 + 13 + 17 = 58
totalSum = 0

for(let i = 2; i <= n; ++i)
{
    isPrime = true
    for(let j = 2; j*j <= i; ++j)
    {
        if(i%j == 0)
        {
            isPrime = false
            break;
        }
    }
    totalSum += (isPrime) ? i:0
}
console.table(
    "3.d\n",
    `n : ${n}, 總和 : ${totalSum}`
)


//3.e 請設計一程式，含有2個正整數變數year(年)、month(月)，印出該年該月有幾天
//  *註: 需考慮閏年

let year = 2100 
let month = 2
let day_in_month = [undefined,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

day_in_month[2] = (
    ( year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0
) ? 29:28

console.table(
    "3.e\n",
    `${year}/${month}, 天數 : ${day_in_month[month]}`
)


// 4.a 請宣告一個陣列，並利用Math.random()產生5個範圍為0~9的整數值給每個元素，且每個值不可重複
let arr = []
let range = 9, count = 5
for(let i = 0; i <= count-1; ++i)
{
    do
    {
        n = Math.floor(Math.random()*(range+1))
    }
    while(arr.includes(n))
    arr.push(n)    
}

console.table(
    "4.a\n",
    `${arr}`,
)



// 4.b (續上題) 請印出陣列所有元素的總和、平均值

let sum = 0

for(let i = 0; i <= count-1; ++i)
{
    sum += arr[i]
}
let avg = sum/count

console.table(
    "4.b\n",
    `總和 : ${sum}, 平均 : ${avg}`,
)



// 4.c (續上題) 請將陣列排序，若有陣列元素之值等於平均值，印出該元素的索引
// 否則，找出平均值介於哪兩個元素值之間，印出該兩個元素的索引
let indexArr = []
for(let i = 0; i <= range; ++i) indexArr.push(count)
for(let i = 0; i <= count-1; ++i) indexArr[arr[i]] = i
let sortedArr = []
let findAvgIndex = false
let indexStr = "";
let sortedIndex = 0


for(let i = 0; i <= range; ++i)
{
    if(indexArr[i] != count)
    {
        sortedArr.push(i)
        if(i == avg) 
        {
            findAvgIndex = true;
            indexStr = `平均值等於排序後陣列索引 ${sortedIndex} 的值`;
        }   
        if(i > avg && findAvgIndex == false) 
        {
            findAvgIndex = true
            indexStr = `平均值介於排序後陣列索引 ${sortedIndex-1} 、${sortedIndex}的值之間`;
        }
        sortedIndex ++
    }
}
console.table(
    "4.c\n",
    `排序後 : ${sortedArr}, ${indexStr}`,
)






//4.d 有一字串陣列內容如下
// >  const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift'];
// > 

// 請統計並印出陣列內每個字母各有幾個，EX:
//  a: 4
//  c: 2
const mySkills = ['javascript', 'java', 'sql', 'c', 'python', 'php', 'swift']
let charDict = {}
for(let i = 0; i <= mySkills.length - 1; ++i)
{
    for(let j = 0; j <= mySkills[i].length - 1; ++j)
    {
        if(mySkills[i][j] in charDict) charDict[mySkills[i][j]] ++
        else charDict[mySkills[i][j]] = 1
        
    }
}
console.table(
    "4.d\n",
    charDict,
)



//4.e 請宣告一個二維陣列，並用巢狀for迴圈將值放入陣列內。結果如下:
//      [
//          [ 18, 27, 36, 45, 54, 63, 72, 81 ],
//          [ 16, 24, 32, 40, 48, 56, 64 ],
//          [ 14, 21, 28, 35, 42, 49 ],
//          [ 12, 18, 24, 30, 36 ],
//          [ 10, 15, 20, 25 ],
//          [ 8, 12, 16 ],
//          [ 6, 9 ],
//          [ 4 ]
//     ]

let doubleArr = []
for(let count = 8; count >= 1; --count)
{
    let singleArr = [];
    for(let base = 2, i = 1; i <= count; base++, i++)
    {
        singleArr.push( base*base + (count-i)*base)
    }
    doubleArr.push(singleArr)
}

console.table(
    "4.e\n",
)
let result = [...doubleArr].forEach(c => console.log(c))