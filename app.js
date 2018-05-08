var fs = require('fs-extra');

// challenge1
fs.readFile("challenge1/info.txt", "utf8", (err, data)=>{
    if (err){
        throw err;
    }
    console.log(data);
    
});

// challenge2
fs.writeFileSync('challenge2/info.txt', 'Luke\nJohn\nNisha\nDavid\nEric\nChris\nTony');
fs.readFile("challenge2/info.txt", "utf8", (err, data)=>{
    if (err){
        throw err;
    }
    console.log(data);
    
});

// challenge3
fs.rename('challenge3/binfo.txt', 'challenge3/info.txt', (err)=> {
    if (err){
        throw err;
    }
});

// challenge4
fs.mkdir('challenge4/copyfolder');
fs.copy('challenge4/info.txt', 'challenge4/copyfolder/info.txt');

// challenge5
fs.readFile('challenge5/info.txt', 'utf8', (err,data)=>{
    if (err){
        throw err;
    }
    var result = data.replace(/-/g, ' ');
    fs.writeFile('challenge5/info.txt', result, 'utf8');
})

// challenge6
fs.readdir('challenge6', (err, files) => {
  files.forEach(file => {
    if (file.includes('txt')){
        console.log(file);
    }
  });
})


