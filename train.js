// console.log('bu train.js')

// // A-TASK: 

// // Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// // MASALAN countLetter("e", "engineer") 3ni return qiladi.


// //yechim:
// function countLetter(a, b) {
//     let getLetter = 0;
//     for (let i = 0; i < b.length; i++) {
//         if (b[i] === a) {
//             getLetter++;
//         }
//     }
//     return getLetter;
// }

// const result = countLetter("e", "engineer");
// console.log("result: ", result);


// //callback functions

// console.log("Jack Ma maslahatlari")
// const list = [

//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];


// // function suggestion(a, callback) {
// //     if (typeof a !== "number") callback("insert a number", null);
// //     else if (a <= 20) callback(null, list[0]);
// //     else if (a >= 20 && a <= 30) callback(null, list[1]);
// //     else if (a >= 30 && a <= 40) callback(null, list[2]);
// //     else if (a >= 40 && a <= 50) callback(null, list[3]);
// //     else if (a >= 50 && a <= 60) callback(null, list[4]);
// //     else {
// //         setTimeout(() => {
// //             callback(null, list[5])
// //         }, 5000);
// //     }
// // }

// // console.log("passed here 0");
// // suggestion(65, (err, data) => {
// //     if (err) console.log('Error:', err)
// //     else {
// //         console.log('Result: ', data)
// //     }
// // });

// // console.log("passed here 1");


// //async functions
// async function suggestion(a,) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a >= 20 && a <= 30) return list[1];
//     else if (a >= 30 && a <= 40) return list[2];
//     else if (a >= 40 && a <= 50) return list[3];
//     else if (a >= 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//         // setTimeout(() => {
//         //     callback(null, list[5])
//         // }, 5000);
//     }
// }


// //then. &catch.
// // console.log("passed here 0");
// // suggestion(65)
// //     .then((data) => {
// //         console.log('result: ', data)
// //     })
// //     .catch((err) => {
// //         console.log("Error: ", err)
// //     })

// // console.log("passed here 1")

// //async & await
// async function run() {
//     let answer = await suggestion(21);
//     console.log(answer);
//     answer = await suggestion(31);
//     console.log(answer);
//     answer = await suggestion(41);
//     console.log(answer);
// }
// run();

console.log("===== EXECUTE =====");

// DEFINE
function qoldiqliBolish(a, b, callback) {
    if (b === 0) {
        callback("Mahraj nolga teng bololmaydi", null);
    } else {
        callback(null, a % b);
    }
}

// CALL
qoldiqliBolish(10, 7, (err, data) => {
    if (err) console.log("Error:", err);
    else {
        console.log("data:", data);
    }
});


// B-TASK: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// yechim

function getNum(x) {
    let countNum = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] >= '0' && x[i] <= "9") {
            countNum++;
        }

    }
    return countNum
}

const numsOnly = getNum("ad2a54y79wet0sfgb9")
console.log('result', numsOnly)