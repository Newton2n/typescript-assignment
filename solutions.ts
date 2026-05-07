// solution 1

const filterEvenNumbers = (arrayOfNumber: number[]): number[] => {
  const arrayOfEvenNumbers = arrayOfNumber.filter((number) => {
    if (number % 2 === 0) {
      return true;
    }
  });

  return arrayOfEvenNumbers;
};



// solution 2

const reverseString = (input: string): string => {
  const charArray: string[] = [];

  for (let i = 0; i < input.length; i++) {
    charArray.push(input[i]);
  }

  const charArrayReverse = charArray.reverse();

  const joinReverseCharArr = charArrayReverse.join("");

  return joinReverseCharArr;
};


// solution 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};



//? problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};



// solution 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (bookObj: Book): Book & { isRead: boolean } => {
  const newObj = { ...bookObj, isRead: true };

  return newObj;
};





// solution 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// solution 7

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set(arr1);

  const matchedItems: number[] = [];

  arr2.forEach((item) => {
    if (set.has(item)) {
      matchedItems.push(item);
    }
  });
  return matchedItems;
}
