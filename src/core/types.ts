// 一个小方块的逻辑坐标
export interface Point{
    readonly x: number
    readonly y: number
}
// 小方块的显示隐藏
export interface Viewer {
    show (): void
    remove(): void
}