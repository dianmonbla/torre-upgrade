import { ModelAbstract } from './model-abstract';
import { MediaItemModel } from './media-item.model';

export class MediumModel extends ModelAbstract<MediumModel>{
    group: string;
    mediaType: string;
    description: string;
    mediaItems: MediaItemModel[];
}