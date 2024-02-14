let salaries = {
    Firu: 100,
    Akn: 160,
    Aru: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum);