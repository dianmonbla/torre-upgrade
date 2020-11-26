import { GENERAL_SETTINGS } from "./general-settings";

const TORRE_RESOURCE_API: string = 'https://torre.co/api';
const TORRE_BIO_RESOURCE_API: string = 'https://torre.bio/api';
const TORRE_SEARCH_RESOURCE_API: string = 'https://search.torre.co';

export const environment = {
	production: true,
	// Converts GENERAL_SETTINGS constant to step by value
	...JSON.parse(JSON.stringify(GENERAL_SETTINGS)),
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
