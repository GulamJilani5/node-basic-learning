
const fs = require('fs');

//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////READING WRITING FILES SYNCHRONOUSLY

//  const textInput = fs.readFileSync('./text/input.txt', 'utf-8')
//  console.log(textInput);

//  const textOutput =  `Writing ${textInput}.\nCreated on ${Date.now().}.`;

//  fs.writeFileSync('./text/output.txt', textOutput)
// console.log('file has written')

//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////READING WRITING FILES ASYNCHRONOUSLY

fs.readFile('./text/input.txt', 'utf-8', (err, data)=>{
    // console.log(data)
    if(err) return console.log('ERROR OCCURRED');
    
    fs.writeFile('./text/final.txt', data, 'utf-8', err =>{
        console.log('Your file has written')
    })
})
console.log('Will read file')



