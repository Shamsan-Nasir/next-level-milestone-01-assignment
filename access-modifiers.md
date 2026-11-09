Access Modifiers in Typescript

Access modifiers help to control which parts of a class can access the properties and methods of a class. The access modifiers provided by typescript that We have studied include public,private, protected. readonly also works similarly even if it is not an access modifier. together these provide a way to restrict the access of data of a class in according to different levels based on the modifier used.

public access lets access of the method or property from anywhere.On the other hand, Private access modifier only allows access from inside the class in which they are declared. Protected is similar to private.While it restricts outside access like private, it also lets subclasses to access the properties or methods that they inherit. on the other hand, a readonnly modifier can not be reassigned after it has been declare inside a constructor. The code example below can make this even clearer  

class User {
    public name: string;
    private password: string;
    protected role: string;
    readonly id: number;

    constructor(name: string, password:string,  role:string, id: number) {
        this.name = name;
        this.password = password;
        this.role = role;
        this.id = id;
    }

    public checkPassword(input: string): boolean {
        return this.password === input;
    }
}

class Admin extends User {
    
    getRole(): string {
        return this.role;
    }
}


here name is available outside the user class . while password  is only available to user class.   Role is available to bothe the user and admin class because admin inherits from user, but it can not be accessed from anywhere outside these class. the id number on the other hand is fixed and can not be changed once set.

in conclusion public should be used when the data is safe to be accessed by anyone, proivate for sensitive dataa and protected for data that needs to be accessed by child classes. readonly is for when a value should be only set once and always remain unchanged. This is how access modifiers work in typescript OOP to control data acccess, 