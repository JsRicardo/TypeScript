import { Point, Viewer } from "./types"

/**
 * 小方块类
*/
export class Square {
    private _color: string = ''
    private _point: Point = {
        x: 0,
        y: 0
    }

    // 显示者，如何显示交给外部控制
    private _viewer?: Viewer
    get viewer() {
        return this._viewer
    }
    set viewer(val) {
        this._viewer = val
        if (this._viewer) {
            this._viewer.show()
        }
    }
    // 坐标
    get point() {
        return this._point
    }
    set point(val) {
        this._point = val
    }
    // 颜色
    get color() {
        return this._color
    }
    set color(val) {
        this._color = val
    }
}