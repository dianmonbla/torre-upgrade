export interface ModelInterface<T> {
    created?: Date;
    setData(data: T): void
}