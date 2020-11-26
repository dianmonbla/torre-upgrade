import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class PlatformService {
    constructor(
        @Inject(PLATFORM_ID) private _platform: Object
    ) { }

    public isServer(): boolean {
        return isPlatformServer(this._platform)
    }
}