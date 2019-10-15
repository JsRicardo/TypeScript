class Plan {
    name: string
    private blood: number = 100
    private power: number = 2

    constructor(name: string) {
        this.name = name
    }

    public shoot(plan: Plan) {
        console.log(`${this.name}: i shoot ${plan.name} with ${this.power} power`)
        plan.eatBolet(this.power)
    }
    public eatBolet(power: number) {
        console.log(this.name + ': i am eating bolet')
        this.blood = this.blood - power
        if (this.blood <= 0) {
            this.blood = 0;
            console.log(this.name + ': i am die')
        }
    }
    public static h() {

    }
}

const p = new Plan('爱国者号')
const q = new Plan('小日本号')
p.shoot(q)