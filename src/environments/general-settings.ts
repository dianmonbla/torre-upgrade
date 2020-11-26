import { GeneralSetiingInterface } from 'src/app/shared/interfaces/general-setting.interface';

const TORRE_RESOURCE_API: string = 'https://torre.co/api';
const TORRE_BIO_RESOURCE_API: string = 'https://torre.bio/api';
const TORRE_SEARCH_RESOURCE_API: string = 'https://search.torre.co';

export const GENERAL_SETTINGS: GeneralSetiingInterface = {
	configuration: {
		general: {
			title: 'TORRE UPGRADE'
		},
		list: {
			jobs: {
				title: 'JOBS'
			},
			people: {
				title: 'PEOPLE'
			}
		}
	},
	api: {
		torre: {
			resource: {
				general: `${TORRE_RESOURCE_API}`,
				bio: `${TORRE_BIO_RESOURCE_API}`,
				search: `${TORRE_SEARCH_RESOURCE_API}`,
			}
		}
	}
};
