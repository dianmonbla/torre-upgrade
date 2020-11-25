import { ModelInterface } from '../interfaces/model.interface';

export abstract class ModelAbstract<T> implements ModelInterface<T> {
    setData(data: T): void {
        if (data)
            Object.assign(this, data)
    }
}