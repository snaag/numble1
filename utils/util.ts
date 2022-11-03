export const goToPathRefresh = (path: string) => {
    const { origin } = location;
    location.href = origin + path;
}

export const myThrottle = (fn: Function, intervalTime: number): Function => {
    let prevTimestamp = Date.now();

    return () => {
        const currTimestamp = Date.now();
        if(currTimestamp - prevTimestamp > intervalTime) {
            fn();
        }
        prevTimestamp = currTimestamp;
    }
}