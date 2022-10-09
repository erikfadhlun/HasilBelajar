const nama = "Erik";
let usia = 30;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) {
        generasi = "generasi remaja";
    }
    else if ( usia > 18 && usia <= 30) {
        generasi = 'dewasa';
    }
    else if (usia > 30) {
        generasi = 'kolot lu';

    }
    else if( usia >= 2 && usia <= 10) {
        generasi = 'anak anak';
    }
    else {
        //jika kodisi tidak terpenuhi
        generasi = 'masih bbayi ko';
    }

    return biodata.innerHTML = generasi; 
}
console.log(nama);
console.log(usia);

generateBiodata();