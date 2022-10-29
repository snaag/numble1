export const goToPathRefresh = (path) => {
    const { origin } = location;
    location.href = origin + path;
}