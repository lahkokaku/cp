const shoelaceArea = (x, y, z) => {
    return 0.5 * Math.abs(x[0]*y[1] - x[1]*y[0] + y[0]*z[1] - y[1]*z[0] + z[0]*x[1] - z[1]*x[0])
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res = 0

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let k = j + 1; k < points.length; k++) {
                res = Math.max(res, shoelaceArea(points[i], points[j], points[k]))
            }
        }
    }

    return res
};