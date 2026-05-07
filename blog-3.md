# Title: How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in .

## Introduction :Generic one of the most important concept in typescript world .It allow to create reuseable types . It work like function parameter, in generic type we pass different different types with safety to make a function or any data types reuseable with many types ,we defined it by angle bracket <T> this T is like type parameter .By this we can use many of version of a type without loosing typescript power.

### Reusable Component : We can create reuseable component by Generic like interface .It is handy to use on many function or class without making a new type ,lets se in code how we can do that

```

interface ReUseAble<T> {
  email: string;
  userInfo: T;
} // re use able type

type UserDetails = {
  firstName: string;
  lastName: string;
  age: number;
};

const userResponse: ReUseAble<UserDetails> = {
  email: "@gmail.com",
  userInfo: {
    firstName: "Mr K",
    lastName: "An",
    age: 24,
  },
};

type UserDetailsPro = {
  firstName: string;
  lastName: string;
  age: number;
  subscription: boolean;
};

const userResponse2: ReUseAble<UserDetailsPro> = {
  email: "@gmail.com",
  userInfo: {
    firstName: "Mr K",
    lastName: "An",
    age: 24,
    subscription: true,
  },
};
```
In upside i define a interface that is ReUseAble<T> this interface is flexible and handy type it can use on various version we can pass types in <T> this generic param.



### Generic Function :By creating a generic function we are making that function to operate it on many types .It give use a huge power .

```
function function1<T>(value: T): T {
  return value;
}

function1<string>("Newton");
function1<number>(12);
function1<object>({ name: "Newton" });
function1<string[]>(["N", "E", "W"]);
function1<number[]>([1, 2, 3]);

```

#### in that code we making a generic function1, when we are calling this function we are pre defining the type of the functions parameter type or return type <T> in here by this way we can use this function on various type .
