import { Square } from "./core/Square";
import { PageSquareViewer } from "./core/viewer/PageSquareViews";
import $ from 'JQuery'

const sq = new Square()
sq.color = '#fff'
sq.viewer = new PageSquareViewer(sq, $('#root'))

sq.point = {
    x: 3,
    y: 5
} 
sq.viewer.show()