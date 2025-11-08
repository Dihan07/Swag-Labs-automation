export function getRandomIndices(total, count) {
    const indices = [];
    while (indices.length < count) {
        const random = Math.floor(Math.random() * total);
        if (!indices.includes(random)) {
            indices.push(random);
        }
    }
    return indices;
}