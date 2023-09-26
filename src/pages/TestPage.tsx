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

  [1,2,3]
      .map(mapNumbersAndAddOne)
      .filter(filterOddNumbers)
      .map(mapNumbersAndAddOne);

  // [2,3,4]

  return (
    <div className="container"/>
  );
};
export default TestPage;
