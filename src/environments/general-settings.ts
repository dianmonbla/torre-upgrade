import { GeneralSetiingInterface } from 'src/app/shared/interfaces/general-setting.interface';

const TORRE_RESOURCE_API: string = 'http://localhost:3000';
const TORRE_BIO_RESOURCE_API: string = 'http://localhost:3000';
const TORRE_SEARCH_RESOURCE_API: string = 'http://localhost:3000';

export const GENERAL_SETTINGS: GeneralSetiingInterface = {
	configuration: {
		general: {
			title: 'TORRE UPGRADE'
		},
		list: {
			jobs: {
				title: 'OPPORTUNITIES'
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
