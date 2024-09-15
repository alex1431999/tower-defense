export function doTimesWithDelay(func: () => any, amount: number, delay: number) {
    let counter = 0
    const intervalId = setInterval(() => {
        func()
        counter += 1

        if (counter >= amount) {
            clearInterval(intervalId)
        }
    }, delay)
}