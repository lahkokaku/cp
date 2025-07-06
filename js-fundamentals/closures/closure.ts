type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count: number = init

    const increment = (): number => {
        return ++count
    }
    const decrement = (): number => {
        return --count
    }
    const reset = (): number => {
        return (count = init)
    }

    return {
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */