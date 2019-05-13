import { request } from '../../../services';
import { VerifierError } from '../../../models';
import { SUB_STEPS } from '../../../constants';
import { getText } from '../../i18n/useCases';

/**
 * getRegisteredIssuerIds
 *
 * @param issuerId
 * @returns {Promise<any>}
 */
export default async function getRegisteredIssuerIds (issuerRegistryURI) {
	const errorMessage = getText('errors', 'getRegisteredIssuerIds');
	const response = await request({url: issuerRegistryURI}).catch(() => {
		throw new VerifierError(SUB_STEPS.getRegisteredIssuerIds, errorMessage);
	});

	return JSON.parse(response);
}
