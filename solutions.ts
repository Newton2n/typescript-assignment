// solution 1

const filterEvenNumbers = (arrayOfNumber: number[]): number[] => {
  const arrayOfEvenNumbers = arrayOfNumber.filter((number) => {
    if (number % 2 === 0) {
      return true;
    }
  });

  return arrayOfEvenNumbers;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

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

reverseString("typescript");

// solution 3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
};
checkType("Hello");
checkType(42);

//? problem 4

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");

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

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);

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

const student = new Student("Alice", 20, "A");

student.getDetails();

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
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
