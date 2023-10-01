import './StartScreen.css';

// data.name = John

interface Car {
    name: string;
    models: string[];
}

interface User {
    name: string;
    age: number;
    cars: Car[];
}

const user: User = {
    name: "John",
    age: 30,
    cars: [
        {
            "name": "Ford",
            "models": [
                "Fiesta",
                "Focus",
                "Mustang"
            ]
        },
        {
            "name": "BMW",
            "models": [
                "320",
                "X3",
                "X5"
            ]
        },
        {
            "name": "Fiat",
            "models": [
                "500",
                "Panda"
            ]
        },
  ],
};

function getFirstCarName(cars: Car[]): string {
    return cars[0].name;
}

getFirstCarName(user.cars)

function getAllCarNamesFromUser(user: User): string[] {
    return user.cars.map((car) => {
        return car.name;
    })
}

getAllCarNamesFromUser(user);

// ["Ford", "BMW", "Fiat"]
function findBrandByModelFromUser (user: User, model: string): string | undefined {
    const { cars } = user;
    const carWithMatchingModel = cars.find(({models}) => models.includes(model));

    return carWithMatchingModel?.name
}

findBrandByModelFromUser(user, "Panda");

// Fiat









const TestPage = () => {
  console.log('TestPage')


  const list = [1,2,3,4,5,6,7,8,9];

  interface Sum {
    x: number;
    y: number;
  }
  const sum = ({x, y}: Sum) => {
    return x+y;
  }

  const add = (x: number) => {
    return (y: number) => {
      return x + y;
    };
  }

  const addOne = add(1);
  const addTen = add(10);

  const makeString = (x: number) => {
    return x.toString();
  }

  // "hello" -> ["h", "e", "l", "l", "o"]
  //
  // [1,2,3,4,5,6,7,8,9] -> 9
  const stringAssArray = (s: string): string[] => {
    return s.split("");
  }

  const countArray = (s: string[]): number => {
    return s.length;
  }

  const compose = <A,B, C>(
      f: (value: B) => C,
      g: (value: A) => B) => {
    return (value: A) => f(g(value));
  }

  const countString = compose(
      countArray,
      stringAssArray,
  );

  console.log(countString("hello"));

  const addItemToList = <A,>(list: A[], item: A): A[] => {
    list.push(item);
    return list;
  }

  // console.log(addItemToList([1,2,3], 4));
  // console.log(addItemToList(["1","2","3"], "4"));

  const makeStringAndSum = compose(makeString, sum);


  // console.log(makeStringAndSum({x: 1, y: 2}));

  const mapNumbersAndAddOne = (x: number) => {
    return x+1
  }

  const filterOddNumbers = (x: number[]) => {
    return x.filter((x) => x % 2 === 0);
  }

  // [1,2,3]
  //     .map(mapNumbersAndAddOne)
  //     .filter(filterOddNumbers)
  //     .map(mapNumbersAndAddOne);

  // [2,3,4]

  return (
    <div className="container"/>
  );
};
export default TestPage;


const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 15 },
];

const dataItem = {
    category: 'A', value: 10
}
//
// const groupedData = data.reduce((groups, item) => {
//     const key = item.category; // A
//     // {A:[{ category: 'A', value: 10 }, B:[{ category: 'B', value: 20 }]]}
//     if (!groups[key]) {
//         groups[key] = [];
//     }
//     // {A:[{ category: 'A', value: 10 }, B:[{ category: 'B', value: 20 }]]}
//     groups[key].push(item);
//     // {A:[{ category: 'A', value: 10 }, { category: 'A', value: 15 }], B:[{ category: 'B', value: 20 }]]}
//     return groups;
// }, {});
//
// console.log(groupedData);
// // { A: [ { category: 'A', value: 10 }, { category: 'A', value: 15 } ],
// //   B: [ { category: 'B', value: 20 } ] }
//
// const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
//
// // const words2 = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// // const listItemOccurrenceCounterDict = (accumulator, word) => {
// //     accumulator[word] = (accumulator[word] || 0) + 1;
// //     return accumulator;
// // }
// //
// // const wordCount = words.reduce(listItemOccurrenceCounterDict, {});
// //
// //
// // const wordCount2 = words2.reduce((accumulator, word) => {
// //     accumulator[word] = (accumulator[word] || 0) + 1;
// //     return accumulator;
// // }, {});
//
// const countWords = (words) => {
//     return words.reduce((accumulator, word) => {
//         accumulator[word] = (accumulator[word] || 0) + 1;
//         return accumulator;
//     }, {});
// }
//
// const wordCount = countWords(words)
//
//
// console.log(wordCount);
// // Output: { "apple": 3, "banana": 2, "cherry": 1 }
//
// Object.keys({ category: 'A', value: 10 }).map((item) => {
//     // item = "value"
// })
//
