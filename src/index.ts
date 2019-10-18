// 抽象类棋子 chess
abstract class Chess {
    x: number = 0
    y: number = 0

    abstract readonly name: string = '' // 抽象成员
    /**  设计模式：模板模式
    * 方法的流程基本一致，只是实现不同，提出流程，单独实现方法
    */
    move(targetX: number, targetY: number): boolean {
        console.log('棋盘边界判断')
        console.log('目标位置是否有己方棋子判断')
        // 棋子移动规则判断
        if (this.rule(targetX, targetY)) {
            this.x = targetX
            this.y = targetY
            return true
        } else {
            return false
        }
    }
    protected abstract rule(targetX: number, targetY: number): boolean
}

// 类 炮
class Pao extends Chess {
    // 子类必须实现父类中的抽象方法
    rule(targetX: number, targetY: number): boolean {
        // 炮走直线，目标位置有己方棋子&棋盘边界判断 此处不做判断
        if (targetX === this.x && targetY !== this.y) {
            return true
        } else if (targetX !== this.x && targetY === this.y) {
            return true
        } else {
            return false
        }
    }
    readonly name: string = '炮' // 子类必须赋值父类中的抽象成员
}
class Horse extends Chess {
    rule(targetX: number, targetY: number): boolean {
        return false
    }
    readonly name: string
    constructor() {
        super()
        this.name = ''
    }
}
class Soldier extends Chess {
    rule(targetX: number, targetY: number): boolean {
        return false
    }
    get name() {
        return '兵'
    }
}