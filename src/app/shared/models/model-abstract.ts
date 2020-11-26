import { ModelInterface } from '../interfaces/model.interface';

export abstract class ModelAbstract<T extends ModelInterface<T>> implements ModelInterface<T> {
    created?: Date;

    setData(data: T): void {
        if (data.created)
            this.created = new Date(data.created);

        if (data)
            Object.assign(this, data)

    }
}