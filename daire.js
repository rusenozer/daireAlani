const yariCap = process.argv.slice(2)[0];

function alanHesapla(yaricap){
    const alan = Math.PI*yaricap*yariCap
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı ${alan}`)
}


alanHesapla(yariCap);