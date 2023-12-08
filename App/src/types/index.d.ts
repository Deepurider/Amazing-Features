export { }
declare global {
    // array types
    interface Array<T> {
        groupBy(array: any[], field: string): any[];
    }
}