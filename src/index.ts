// 抽象类棋子 chess
abstract class Chess {
    x: number = 0
    y: number = 0
    
    abstract readonly name: string = '' // 抽象成员
}

// 类 炮
class Pao extends Chess {
    readonly name: string = '炮' // 子类必须实现父类中的抽象成员
}
class Horse extends Chess {
    readonly name: string
    constructor(){
        super()
        this.name = ''
    }
}
class Soldier extends Chess {
    get name () {
        return '兵'
    }
}