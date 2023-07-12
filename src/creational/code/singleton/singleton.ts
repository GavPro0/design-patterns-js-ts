// /**
//  * How to implement Singleton?
//  *
//  * 1. Make the constructor private
//  * 2. Create a static method who calls the private
//  *  constructor and save the instance in a static variable
//  */

class SingletonTS {

  private static instance: SingletonTS;
  private version: string;

  private constructor(version: string) {
    this.version = version;
  }

  static getInstance(version: string): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS(version);
    }

    return SingletonTS.instance;
  }
}

function appSingletonTS() {
  // const singleton1 = SingletonTS.getInstance("version-1");
  // const singleton2 = SingletonTS.getInstance("version-2");
  // const singleton3 = SingletonTS.getInstance("version-3");
  
  // // const singleton4 = new SingletonTS(); 

  // // console.log('singleton1: ' + singleton1);
  // // console.log('singleton2: ' + singleton2);
  // // console.log('singleton3: ' + singleton3);

  // console.log(singleton1 === singleton2);
  // console.log(singleton1 === singleton3);

  console.log('Probando  -  SingletonTS!!!');
}

appSingletonTS();

