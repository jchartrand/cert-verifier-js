import { REGISTERED_ISSUER_IDENTITIES } from '../constants';
import VerifierError from '../models/verifierError';
import * as SUB_STEPS from '../constants/verificationSubSteps';
import { getText } from '../domain/i18n/useCases';

export default function ensureIssuerIdentity (issuerIdentity) {
	if ( ! REGISTERED_ISSUER_IDENTITIES.includes(issuerIdentity) ) {
		throw new VerifierError(
			SUB_STEPS.checkIssuerIdentity,
			getText('errors', 'ensureIssuerIdentity'));
	}
}
