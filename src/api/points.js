const mockPoint = [10, 20, 60, 100, 150, 200];

export const getPoints = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inx = parseInt(Math.random() * mockPoint.length);
            resolve(mockPoint[inx]);
        }, 100)
    })
}