export const createGrid = (size: number) => {
    return Array.from(Array(size), () => new Array(size).fill(0));
}
