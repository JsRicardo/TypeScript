interface U {
    name: string,
    age: number,
    sayHello(msg: string): void
}

interface B extends U  {
    look: string
}
// 实现接口
class User implements U {
    sayHello(msg: string): void {
        throw new Error("Method not implemented.");
    }
    name: 'ricardo' = "ricardo";
    age!: 18;
    
} 

let u: U = {
    name: 'ricardo',
    age: 18,
    sayHello (msg) {
        console.log(msg)
    }
}

