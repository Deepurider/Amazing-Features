export function setCustomPrototypes() {
    // array prototypes
    if (!Array.prototype.groupBy) {
        Array.prototype.groupBy = function (array: any[], field: string, key: string = 'name', dataKey: string = 'data'): any[] {
            var result: any[] = [];
            if (array.length === 0) return result;
            if (!Object.keys(array[0]).find(x => x === field)) return result;
            for (let i = 0; i < array.length; i++) {
                if (result.find(y => y[key] === array[i][field])) {
                    const index = result.findIndex(y => y[key]);
                    result[index]?.data.push(array[i]);
                } else {
                    result.push({
                        [key]: array[i][field],
                        [dataKey]: [array[i]]
                    });
                }
            }
            return result;
        }
    }
}
