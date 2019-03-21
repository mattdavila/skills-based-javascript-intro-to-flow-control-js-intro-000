function basicTeenager(age) {if (age>=13 && age<=19)
    return "You are a teenager!"

}

function teenager(age) {if (age>=13 && age<=19)
    {return "You are a teenager!"}
    return "You are not a teenager"

}

function ageChecker(age) {if (age>=13 && age<=19)
  {return "You are a teenager!"}
  else if (age<13)
  {return "You are a kid"}
  else
  {return "You are a grownup"}

}

function ternaryTeenager(age) {return (age>=13 && age<=19) ?
    "You are a teenager":"You are not a teenager"

}
var phrase ="You are a teenager"
function switchAge(age) {switch (age){
    case age=13: phrase break;
    case age=14: phrase break;
    case age=15: phrase break;
    case age=16: phrase break;
    case age=17: phrase break;
    case age=18: phrase break;
    case age=19: phrase break;}
    default: return "You have an age"
