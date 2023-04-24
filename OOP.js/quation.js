class Cars { 

    constructor(name, maker, price) { 

      this.name = name; 

      this.maker =  maker; 

      this.price = price; 

    } 

    getDetails(){ 

        return (`The name of the car is ${this.name}.and car price is ${this.price}`) 

    } 

  } 

  let car1 = new Cars('Rolls Royce Ghost', 'Rolls Royce', '$315K'); 

  let car2 = new Cars('Mercedes AMG One', 'Mercedes', '$2700K'); 

  console.log(car1.name);     
  console.log(car1.maker);     
  console.log(car1.price);     

//   console.log(car2.maker);   

  console.log(car1.getDetails()); 