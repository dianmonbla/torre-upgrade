import { GENERAL_SETTINGS } from "./general-settings";

export const environment = {
	production: true,
	// Converts GENERAL_SETTINGS constant to step by value
	...JSON.parse(JSON.stringify(GENERAL_SETTINGS))
};
