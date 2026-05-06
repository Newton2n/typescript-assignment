# Title : How do the four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale TypeScript projects

## Introduction : Inheritance, Polymorphism, Abstraction, and Encapsulation are the four pillar of object oriented programming . This four pillar helps to do complex project bit easy way with reuseable code . In typescript it is more focused on object oriented programming than javascript it have some more key word like private ,protected ,readonly ,etc this make more easy to maintain code .

### Inheritance : Inheritance is the first pillar of oop it mean it can inheritance a from parent class mean a base class is Animal and have some basic property and one is Cat class that have some unique property or method if it extends to Animal class then Cat class have all property and methods of Animal Class .

#### code :

```
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
}


class Cat extends Animal {
  //it inheritance Animal class
  color: string;

  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }

  // Special method only for Cats
  meow() {
    console.log("Meow! Give me tuna.");
  }
}

const rocky = new Cat("Rocky", "White");

rocky.eat(); // because of extend child class can use parent method
//output Rocky is eating...

```

### Polymorphism :Polymorphism mean uniqueness i mean same property name but different work , i told before in Inheritance that if a class extend the child class will get all property from parent so if there is any method define in parent class if we create a same method (obviously same type like parent class method) in child class with different work it mean Polymorphism ;

code :

```
class Parent {
  getUpFromBed(time: number) {
    console.log(`Parents get up from bed at ${time} am`);
  }
}

class Child extends Parent {
  // getUpFromBed(time :string){ //! you cannot change type of previous method type
  //   console.log( `Children get up from bed at ${time} am`)
  // } // !invalid because of change types

  getUpFromBed(time: number) {
    console.log(`Children get up from bed at ${time} am`);
  } // in here  the method name is same but work different that called Polymorphism
}
```

### Abstraction :In typescript Abstraction mean a abstract idea of a class what it will do . it basically give us final result .Example :Like the internet travel 100 miles and come after many layer of verification there are complex mecanism behind this we don not even know we only use internet in high level ,the high level internet is a Abstraction . This behind the work are Encapsulated/hided .In typescript we can define a abstract idea of a class by interface and abstract class ;

#### code :

```
abstract class AbstractInternet {
  abstract VideoDownloading :() =>void
} //abstract class



class BehindTheInternet implements AbstractInternet {
  private travelThroughCables() {
    return "Data moved 5,000 miles via light pulses.";
  }

  private checkSecurityLayers() {
    return "IP Address verified. Packets reassembled.";
  }

  private handshakeWithISP() {
    return true;
  }

  VideoDownloading() {
    if (this.handshakeWithISP()) {
      console.log("video is downloading");
    }
  }
}

```

### Encapsulation : Encapsulation mean hide complex method in class . It hide complex methods to user by private ,protected ,readonly ,# key . Encapsulation and Abstraction look like same but the are different .

#### code :

```
class BehindTheInternet  {
  private travelThroughCables() {
    return "Data moved 5,000 miles via light pulses.";
  } // this all are Encapsulated and anyone can not change or touch it from outside

  private checkSecurityLayers() {
    return "IP Address verified. Packets reassembled.";
  } // this all are Encapsulated and anyone can not change or touch it from outside

  private handshakeWithISP() {
    return true;
  } // this all are Encapsulated and anyone can not change or touch it from outside

  VideoDownloading() {
    if (this.handshakeWithISP()) {
      console.log("video is downloading");
    }
  }
}

```

#### Conclusion :In Conclusion we can tell that this four pillar of OOP concept are very use full for use and make code re-useable and simple to understand
