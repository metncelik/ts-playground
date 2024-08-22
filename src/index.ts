// aug 22 - typescript official docs
// JS primitive types: boolean, bigint, null, number, string, symbol, undefined 
// TS primitive types: any, unknown, never, void (use any for opt-out typing, unknown is stricter then any)

// look into: discriminate union
type User = {
    id: number;
    username: string;
}

const user1:User = {
    id: 1,
    username: "metobabba" 
}

function foo(user: User): void {
    console.log(user);
}

// there is a controversy about explicit returns
// take a look at 'as const'
// some devs prefer inferring return types
function bar(): User {
    return {
        id:2,
        username: ""
    }
}

foo(user1);
const user2: User = bar();
console.log(user2);


// type union, and
type customBool = true | false;
const bool1: boolean = true;

type unionType = {name: string} | {nickname: string};
type andType = {name: string} & {nickname: string}; 

function baz (role: "admin" | "user") {}

// interface vs type: 
// - you have to use objects to create an interface.
// - can't union interfaces.
// - need use extends keyword to combine two interfaces.
// - ts won't warn you if you accidentally create an
// interface with same name. it will extend the existing interface.
// * therefor types are recomended over interface contrary of ts docs

interface UserInter {
    id: number;
    username: string;
}

interface UserInter {
    age: number;
}

const user3: UserInter = {
    id:2,
    username: "metobabba",
    age: 45
}

// as keyword: you can cast variables with type any 
const someVariable: any = "Some String";
const varLength: number = (someVariable as string).length;

function qux(): string {
    return someVariable as string;
}

// types with classes
type UserForClass = {
    id: number;
    username: string;
    getUsername(): string;
}

class UserAccount implements UserForClass {
    id;
    username;
    
    constructor(id: number, username: string) {
        this.id = id,
        this.username = username
    }
    
    // dont have to explicit return type again
    public getUsername() {
        return this.username;
    }
}

const userObj: UserAccount = new UserAccount(4, "metoababba");
userObj.getUsername();

// aug 23
// generics: type script know which type of data passed into function
// so if you have a func that can get a param with diff. types it can be used
// - you can nest generics
function quux<T>(name: T) {
    return name;
}

const strReturn = quux<string>("some str");
const numberReturn = quux<number>(1234);

//type generics

type Result<DataType> = {
    data: DataType
}

const result: Result<string> = {
    data: "hello ts"
}

