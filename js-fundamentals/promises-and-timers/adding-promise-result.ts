type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const [res1, res2]: [number, number] = await Promise.all([promise1, promise2])

    return res1 + res2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */