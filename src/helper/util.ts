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

export function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    )
}

export function copy<T extends Record<any, any>>(json: T): T {
    return JSON.parse(JSON.stringify(json))
}