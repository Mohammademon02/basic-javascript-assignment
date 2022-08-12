
//Problem 1: radianToDegree

function radianToDegree(radian){

    if(typeof radian != 'number'){
        return "Please enter a valid number"
    }
    else{
        const pi = Math.PI;
        let result = radian * ( 180 / pi );
        return result.toFixed(2);
    }
}
// console.log(radianToDegree(10));
// console.log(radianToDegree(25));
// console.log(radianToDegree(199));




//Problem 2: isJavaScriptFile

function isJavaScriptFile(fileName){
  if(typeof fileName != 'string'){
        return "Please enter a valid name"
  }
  else{
    let result = fileName.endsWith('.js');
        return result;
  }
}
// console.log(isJavaScriptFile('app.js'));
// console.log(isJavaScriptFile('js.png'));
// console.log(isJavaScriptFile('image.js.png'));
// console.log(isJavaScriptFile('images.jpg.js'));




//Problem 3: oilPrice

function oilPrice( dieselQuantity, patrolQuantity, octenQuantity ){
    if(typeof dieselQuantity != 'number' || typeof patrolQuantity != 'number' || typeof octenQuantity != 'number'){
            return "Please enter a valid number"
    }
    else{
        const dieselPrice = 114;
        const patrolPrice = 130;
        const octenPrice = 135;
        let result = (dieselQuantity * dieselPrice) + (patrolQuantity * patrolPrice) + (octenQuantity * octenPrice);
        return result;
    }
}
// console.log(oilPrice( 1, 1, 1));
// console.log(oilPrice( 30, 20, 10));
// console.log(oilPrice( 1, 0, 2));
// console.log(oilPrice( 0, 2, 3));




// 4: publicBusFare

function publicBusFare(totalPeople){
    if(typeof totalPeople != 'number'){
            return "Please enter a valid number"
    }
    else{
        let bus = totalPeople % 50;
        let microbus = bus % 11;
        let publicBus = microbus;
        const publicBusFare = 250;
        totalFare = publicBusFare * publicBus;
        return totalFare;
    }
}
// console.log(publicBusFare(50));
// console.log(publicBusFare(55));
// console.log(publicBusFare(112));
// console.log(publicBusFare(235));
// console.log(publicBusFare(365));




//Problem 5: isBestFriend

function isBestFriend(person1, person2){
    if(typeof person1 != 'object' || typeof person2 != 'object'){
            return "Please enter a valid object"
    }
    else{
        if(person1.name === person2.friend && person2.name === person1.friend){
            return true;
        }
        else{
            return false;
        }
    }
}
// let person1 = {name: "abul", friend: "babul"};
// let person2 = {name: "babul", friend: "abul"};

// let person1 = {name: "abul", friend: "kabul"};
// let person2 = {name: "kabul", friend: "sabul"};

// let person1 = {name: "doe", friend: "alex"};
// let person2 = {name: "john", friend: "doe"};

// console.log(isBestFriend(person1, person2));