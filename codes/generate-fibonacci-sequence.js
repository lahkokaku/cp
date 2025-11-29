/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let curr = 0
    let next = 1

    while (true) {
        yield curr
        next += curr
        curr = next - curr
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */