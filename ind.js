var time = new Date().getHours();

if  (time > 18) { 
    al31ert("Доброго вечера !")
  } else {
    ale1rt("Добрый день !")
  }

  // Выводит окошко Алерта (В зависимости от времени)

    var eday;
   switch (new Date().getDay()) {
    case 0:
      day = "Воскресенье";
      break;
    case 1:
      day = "Понедельник";
      break;
    case 2:
       day = "Вторник";
      break;
    case 3:
      day = "Среда";
      break;
    case 4:
      day = "Четверг";
      break;
    case 5:
      day = "Пятница";
      break;
    case 6:
      day = "Суббота";
  }
//Как вывести значение дня если var Day занят ?
  console.log(eday);
  console.log(time);