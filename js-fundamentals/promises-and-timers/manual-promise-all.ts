type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const len: number = functions.length
        const results: T[] = new Array(len)
        let resolvedCount: number = 0

        for (let i: number = 0; i < len; i++) {
            functions[i]()
                .then((res: T) => {
                    results[i] = res
                    resolvedCount++
                    if (resolvedCount === len) {
                        resolve(results)
                    } 
                })
                .catch(reject)
        }
    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */