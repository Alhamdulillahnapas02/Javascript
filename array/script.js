const antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Antrian awal:" + antrian);

// 1. Datang 1 pembeli yaitu Nabila
antrian.push("Nabila");
console.log("Setelah Nabila datang:" + antrian);

// 2. Datang 2 pembeli yaitu Maza dan Elsi
antrian.push("Maza", "Elsi");
console.log("Setelah Maza dan Elsi datang:" + antrian);

// 3. Elsi tidak jadi antri dan pulang ke rumah
antrian.pop();
console.log("Setelah antrian terakhir pulang:" + antrian);

// 4. Ray sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah antrian pertama selesai:" + antrian);

// 5. Fiki juga sudah mendapatkan belanjaannya
antrian.shift();
console.log("Setelah antrian kedua selesai:" + antrian);

// 6. pembeli baru yaitu Tomi menyerobot antrian yaitu Tomi
antrian.unshift("Tomi"); 

console.log(antrian);