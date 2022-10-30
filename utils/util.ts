export const goToPathRefresh = (path) => {
    const { origin } = location;
    location.href = origin + path;
}

export const myThrottle = (fn, intervalTime) => {
    console.log('[myThrottle] called');
    let prevTimestamp = Date.now();

    return () => {
        const currTimestamp = Date.now();
        if(currTimestamp - prevTimestamp > intervalTime) {
            console.log('[myThrottle] fn called 🛎')
            fn();
        }
        prevTimestamp = currTimestamp;
    }
}