import { ModelAbstract } from './model-abstract';

export class FlagModel extends ModelAbstract<FlagModel>{
    benefits: boolean;
    canary: boolean;
    enlauSource: boolean;
    fake: boolean;
    featureDiscovery: boolean;
    getSignaledBenefitsViewed: boolean;
    firstSignalSent: boolean;
    promoteYourselfBenefitsViewed: boolean;
    promoteYourselfCompleted: boolean;
    importingLinkedin: boolean;
    onBoarded: boolean;
    remoter: boolean;
    signalsFeatureDiscovery: boolean;
    signedInToOpportunities: boolean;
    importingLinkedinRecommendations: boolean;
    contactsImported: boolean;
    appContactsImported: boolean;
    genomeCompletionAcknowledged: boolean;
}