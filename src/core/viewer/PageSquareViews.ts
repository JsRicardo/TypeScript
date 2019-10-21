import { Viewer } from "../types";
import { Square } from "../Square";
import conifg from "./conifg";
import $ from 'JQuery'

export class PageSquareViewer implements Viewer {
    private dom?: JQuery<HTMLElement>

    show(): void {
        if (!this.dom) {
            // 如果不存在方块dom对象，创建方块dom对象
            this.dom = $('<div>').css({
                height: conifg.squareSize.height,
                width: conifg.squareSize.width,
                border: '1px solid #eee',
                boxSizing: 'border-box',
                position: 'absolute'
            }).appendTo(this.root)
        }
        this.dom.css({
            // 逻辑位置 * 像素
            left: this.square.point.x * conifg.squareSize.width,
            top: this.square.point.y * conifg.squareSize.height,
            background: this.square.color
        })
    }
    remove(): void {
        throw new Error("Method not implemented.");
    }

    constructor(
        private square: Square,
        private root: JQuery<HTMLElement>
    ) { }

}