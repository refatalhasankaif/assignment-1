type SrtNumBool = string | number | boolean;

const formatValue = (input: SrtNumBool): SrtNumBool => {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * 10;
  } else {
    return !input
  }
};

type StrOrArr = string | Array<unknown>;

const getLength = (input: StrOrArr): number => {
  if (typeof input === 'string') {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }

  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(
    name: string,
    age: number,
  ) {
    this.name = name;
    this.age = age;
  };

  getDetails(): string {
    return (`'Name: ${this.name}, Age: ${this.age}'`)
  };
};

type ItemsType = {
  title: string;
  rating: number;
};

const filterByRating = (books: ItemsType[]): ItemsType[] => {
  return books.filter(books => books.rating >= 4);
};

type UsersType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: UsersType[]): UsersType[] => {
  return users.filter(users => users.isActive === true)
};

interface Book {
  title: string,
  author: string,
  publishedYear: number,
  isAvailable: boolean,
};

const printBookDetails = (input: Book) => {
  const title: string = input.title;
  const author: string = input.author;
  const publishedYear: number = input.publishedYear;
  const isAvailable: string = input.isAvailable ? "Yes" : "No";
  console.log(`Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable}`);
};

type ArrayType = (number | string)[];

const getUniqueValues = (array1: ArrayType, array2: ArrayType): ArrayType => {
  const returnArray: (string | number)[] = [];

  const checkExists = (value: number | string): boolean => {
    for (let i = 0; i < returnArray.length; i++) {
      if (returnArray[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < array1.length; i++) {
    if (!checkExists(array1[i])) {
      returnArray[returnArray.length] = array1[i]
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!checkExists(array2[i])) {
      returnArray[returnArray.length] = array2[i]
    }
  }

  return returnArray;
};

interface ProductType {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: ProductType[]): number => {
  return products.reduce((total, product) => {
    const price = product.price;
    const quantity = product.quantity;

    let itemsTotalPrice = (price * quantity);

    if (product.discount) {
      itemsTotalPrice = itemsTotalPrice - (itemsTotalPrice * (product.discount / 100));
    };

    return total + itemsTotalPrice;
  }, 0);
};