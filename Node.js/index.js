const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1'
const port = 3002
//request adalah data masuk dari luar
//response adalah data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "ERIK FADHLUN";
    let uang = "1000000"
    let jajan = "500000"
    let sisa = uang - jajan;
    
    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    const hasil = ` 
   
    <head>
        <title>${nama}</title>
    </head>
    <body>
    <h1 style='background: blue;color: yellow;padding: 26px; text-align: center'>NGENTOT ANJING</h1>
        <p>
        Halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}
        </p>
    </body>
    `
    
   
    
    response.statusCode = 200;
    response.end(hasil)
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port} awqikwok`);
    });