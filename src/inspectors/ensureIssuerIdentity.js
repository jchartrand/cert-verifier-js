import VerifierError from '../models/verifierError';
import * as SUB_STEPS from '../constants/verificationSubSteps';
import { getText } from '../domain/i18n/useCases';

export default function ensureIssuerIdentity (issuerIdentity, registeredIssuerIds) {

		if (!registeredIssuerIds.includes(issuerIdentity) ) {
		throw new VerifierError(
			SUB_STEPS.checkIssuerIdentity,
			getText('errors', 'ensureIssuerIdentity'));
	}
}
