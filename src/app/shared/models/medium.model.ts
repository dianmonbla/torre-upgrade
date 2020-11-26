import { ModelAbstract } from './model-abstract';
import { MediaItemModel } from './media-item.model';

export class MediumModel extends ModelAbstract<MediumModel>{
    group: string;
    mediaType: string;
    description: string;
    mediaItems: MediaItemModel[];

    setData(data: MediumModel): void {
        super.setData(data);
        if (data.mediaItems) {
            this.mediaItems = data.mediaItems.map((_mediaItem: MediaItemModel) => {
                let mediaItem: MediaItemModel = new MediaItemModel();
                mediaItem.setData(_mediaItem);
                return mediaItem;
            });
        }
    }
}