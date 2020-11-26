import { GENERAL_SETTINGS } from "./general-settings";

const TORRE_RESOURCE_API: string = 'https://torre-upgrade-api.glitch.me';
const TORRE_BIO_RESOURCE_API: string = 'https://torre-upgrade-api.glitch.me';
const TORRE_SEARCH_RESOURCE_API: string = 'https://torre-upgrade-api.glitch.me';

export const environment = {
	production: true,
	// Converts GENERAL_SETTINGS constant to step by value
	...GENERAL_SETTINGS,
	...{
		api: {
			torre: {
				resource: {
					general: `${TORRE_RESOURCE_API}`,
					bio: `${TORRE_BIO_RESOURCE_API}`,
					search: `${TORRE_SEARCH_RESOURCE_API}`,
				}
			}
		}
	},
};
