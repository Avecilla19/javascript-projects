// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age = 21, mass = 11, hight){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.hight = hight;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!
console.log( tortoise.name, tortoise.age, tortoise.mass, tortoise.color);
console.log(typeof tortoise.age);
console.log(tortoise);