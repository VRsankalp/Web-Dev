// async function main() {
//     await new Promise(r=>setTimeout(()=>{
//         console.log("time")
//         r()
//     },2000))
//     console.log("hello")
// }
// main()

function processData(callback) {
    console.log("Processing data...")
    console.log(callback)

     callback()
}

function done() {
    console.log("Data processed")
}

processData(done)