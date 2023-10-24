// import React from 'react';
// import './App.css';

// interface Person {
//   name: string;
//   age: number;
// }


// function isPerson(obj: any): obj is Person {
//   return typeof obj === "object" && "name" in obj && "age" in obj;
// }

// // function greet(person: Person) {
// //   if (person.name && person.age) {
// //     const personValid: Person = person;

// //     alert(`Hello, ${personValid.age}`)
// //   } else {
// //     alert("Invalid person object.");
// //   }
// // }

// function greet(person: Person) {
//   if (isPerson(person)) {
//     console.log(`Hello, &{person.name}`)
//   } else {
//     console.log("Invalid person object.");
//   }
// }

// greet({name: "John", age: 29});

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// interface Car {
//   type: string;
//   model: string;
//   year: number;
// }


// function isCar(obj: any): obj is Car {
//   if (typeof obj !=="object") return false;

//   if ("type" in obj === false || obj.type ==="custom") return false;

//   if ("model" in obj === false || obj.model === "BMW") return false;

//   if ("year" in obj === false || obj.year < 2000) return false;

//   return true;
// }

// function getCar(obj: any) {
//   if (isCar(obj)) {
//     alert(obj.model);
//   } else {
//     alert("Not a car");
//   }
// }

// // getCar({type: "car", model: "BMW", year: 1999});



// // getCar({type: "car", model: "Audi", year: 2000});


// // getCar({type: "custom", model: "BMW", year: 1999});


// getCar({type: "sportcar", model: "BMW", year: 1999});

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// type User =  {
//   id: number;
//   name: string;
// } 

// const user: User = {
//   id: 43123,
//   name: "Mykolas",
// };

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world {user.name}
//       </header>
//     </div>
//   );
// }

// export default App;



// //================================================================


// import React from 'react';
// import './App.css';

// type User =  {
//   id: 100;
//   name: string;
// } 

// type UserList = User []

// const user: User = {
//   id: 100,
//   name: "Mykolas",
// };

// const userList: UserList = [user];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world {user.name}
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// type User =  {
//   id: 100;
//   name: string;
// } 

// type UserList = [User, number]

// const user: User = {
//   id: 100,
//   name: "Mykolas",
// };

// const userList: UserList = [user, 100];

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world {user.name}
//       </header>
//     </div>
//   );
// }

// export default App;

// //================================================================


// import React from 'react';
// import './App.css';

// type Circle =  {
//   radius: number;
// } 

// type Rectangle = {
//   width: number,
//   height: number,
// }

// type Shape = Circle | Rectangle;

// // const object: Shape = { radius: 10, width: 10};

// // const object: Shape = { width: 10};

// const object: Shape = {radius: 10, width: 230, height:15}

// // console.log("height" in obj ? object.height : null);

// function getObject(object: Shape) {
//   if ("radius" in object) {
//     console.log(object.radius)
//   }

//   if ("width" in object) {
//     console.log(object.width);
//   }
// }

// getObject(object);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// type Circle =  {
//   radius: number;
// } 

// type Rectangle = {
//   width: number,
//   height: number,
// }

// type Shape = Circle & Rectangle;

// const object: Shape = {radius: 10, width: 230, height:15}

// console.log(object.height)

// // function getObject(object: Shape) {
// //   if ("radius" in object) {
// //     console.log(object.radius)
// //   }

// //   if ("width" in object) {
// //     console.log(object.width);
// //   }
// // }

// // getObject(object);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// class Box<T>  {
//   value: T;
//   constructor(value: T) {
//     this.value=value;
//   }
// } 

// let numberBox = new Box<number>(10);
// let stringBox = new Box<string>("TypeScript");


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// type User = {
//   id: number;
//   email: string;
// }

// type Robot = {
//   code: number;
//   version: string;
// }

// type Admin = User & {
//   role: number;
// }

// type Entity<T> = T extends User | Admin ? T: Robot;

// const contentEditor: Entity<Admin> = {
//   id: 1233,
//   email: "test@ggg.com",
//   role: 2,
// }

// // const unknownUser: Entity<{ test: 123}> = {
// //   id: 12312,
// //   email: fhhjg@ializer.com,
// //   role: 2,
// // }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// type HasLength<T, L extends number> = T extends {length: L} ? true : false;

// const has3Length: HasLength<[1,2,3], 3> = true;
// const has5Length: HasLength<string[], 5> = false;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;

// //================================================================


// import React from 'react';
// import './App.css';

// type IsFunction<T> = T extends (...args: any[]) => any ? T : null;

// const name = "John";
// const handleChange = () => alert('Click');

// const MyFunction: IsFunction<typeof handleChange>=handleChange;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;


// //================================================================


// import React from 'react';
// import './App.css';

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// const person = {name: "John", age: 30};
// const name = getProperty(person, "name");

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello world
//       </header>
//     </div>
//   );
// }

// export default App;

//================================================================


import React from 'react';
import './App.css';

class Counter {
  count: number=0;

  increment() {
    this.count++;

  }
}

function IncrementMixin<T extends new (...args: any[])=>{
  increment: (...args: any[]) => any;
  count: number;
}
>(Base: T) {
  return class extends Base {
    incrementAddLog() {
      this.increment();
      console.log(`Count is now: ${this.count}`);
    }
  };
}

const CountingCounter = IncrementMixin(Counter);

const counter = new CountingCounter();
counter.incrementAddLog();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello world
      </header>
    </div>
  );
}

export default App;



