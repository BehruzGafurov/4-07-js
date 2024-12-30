//start questions

// 1. Quyidagi objectni outputdagi ko'rinishda chiqaring

const me = {
    firstName: "Abdulaziz",
    lastName: "Toshpulatov",
    age: 23,
    languages: ["js", "python", "c++", "nodejs"],
    friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
  };
  console.log();
  
  // 2. Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvadratlariga teng object hosil qiling

  const n = 5;
  const squares = {};
  for (let i = 1; i <= n; i++) {
    squares[i] = i * i;
  }
  console.log(squares);
  
  // 3. 2-misoldan hosil bo’lgan objectning kalitlari va qiymatlari yig’indisini toping

  const keysSum = Object.keys(squares).reduce((sum, key) => sum + Number(key), 0);
  const valuesSum = Object.values(squares).reduce((sum, value) => sum + value, 0);
  console.log(keysSum + valuesSum);
  
  // 4. Stringlar massivi berilgan. Object hosil qiling (kalitlari massiv elementlaridan va qiymatlari uzunligidan).
  // (Create an object with strings as keys and their lengths as values)
  const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
  const lengths = {};
  names.forEach(name => {
    lengths[name] = name.length;
  });
  console.log(lengths);
  
  // 5. Mahsulotlar narxi objectidan jami narxni toping. 

  const prices = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 };
  const totalPrice = Object.values(prices).reduce((sum, price) => sum + price, 0);
  console.log(totalPrice);
  
  // 6. Object kalitlari faqat string bo’lsa true, aks holda false qiymat qaytaruvchi defineObject funksiyasi.

  function defineObject(obj) {
    return Object.keys(obj).every(key => typeof key === "string");
  }
  console.log(defineObject({ abc: 1, 123: 2, d: 5 })); 
  
  // 7. 

  
  // 8. Takrorlanuvchi sonlardan unique object hosil qiling 

  const numbers = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
  const counts = {};
  numbers.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });
  console.log(counts);
  
  // 9. Uzun sondan sinflar bo’yicha object hosil qiling.

  const longNumber = "8945472985629";
  const classes = {
    birlar: longNumber.slice(-3),
    minglar: longNumber.slice(-6, -3),
    millionlar: longNumber.slice(-9, -6),
    milliardlar: longNumber.slice(-12, -9),
    trilionlar: longNumber.slice(-13, -12),
  };
  console.log(classes);
  
  // 10. O’qilgan va o’qilmagan kitoblarni ajratib chiqaring.

  // 11. Har bir objectga isMarried property qo’shilsin.
people.forEach(person => {
    person.isMarried = person.age >= 25;
  });
  console.log(people);
  