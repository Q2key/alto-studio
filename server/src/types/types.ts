export type HealthRecord = {
    creationDate: string;
    endDate: string;
    sourceName: string;
    sourceVersion: string;
    device: string;
    startDate: string;
    type: string;
    unit: string;
    value: string;
}

export type AboutMe = {
    HKCharacteristicTypeIdentifierBiologicalSex: string;
    HKCharacteristicTypeIdentifierBloodType: string
    HKCharacteristicTypeIdentifierCardioFitnessMedicationsUse: string;
    HKCharacteristicTypeIdentifierDateOfBirth: string;
    HKCharacteristicTypeIdentifierFitzpatrickSkinType: string;
}

export type LocaleData = {
    locale: string;
}

export type ExportDate = {
    value: string;
}

export enum HealthDataKind {
    HKQuantityTypeIdentifierHeight,
    HKQuantityTypeIdentifierBodyMass,
    HKQuantityTypeIdentifierHeartRate,
    HKQuantityTypeIdentifierStepCount,
    HKQuantityTypeIdentifierDistanceWalkingRunning,
    HKQuantityTypeIdentifierActiveEnergyBurned,
    HKQuantityTypeIdentifierFlightsClimbed,
    HKQuantityTypeIdentifierDietaryCaffeine,
    HKQuantityTypeIdentifierRestingHeartRate,
    HKQuantityTypeIdentifierHeadphoneAudioExposure,
    HKQuantityTypeIdentifierWalkingDoubleSupportPercentage,
    HKQuantityTypeIdentifierWalkingSpeed,
    HKQuantityTypeIdentifierWalkingStepLength,
    HKQuantityTypeIdentifierWalkingAsymmetryPercentage,
    HKDataTypeSleepDurationGoal,
    HKQuantityTypeIdentifierAppleWalkingSteadiness,
    HKCategoryTypeIdentifierSleepAnalysis
}

export type HealthAdaptedRecord = {
    creationDate: string;
    endDate: string;
    sourceName: string;
    sourceVersion: string;
    device: string;
    startDate: string;
    type: HealthDataKind;
    unit: string;
    value: string;
}

export type HealthData = {
    locale: LocaleData,
    ExportDate: ExportDate,
    Me: AboutMe,
    Record: Array<HealthAdaptedRecord>;
}

/* raw types */
export type XmlExportDate = {
    $: ExportDate
}

export type XmlAboutMe = {
    $: AboutMe;
}

export type XmlHealthRecord = {
    $: HealthRecord;
}

export type XmlHealthData = {
    $: LocaleData,
    ExportDate: XmlExportDate[],
    Me: XmlAboutMe[],
    Record: XmlHealthRecord[],
}

export type XmlReport = {
    HealthData: XmlHealthData;
}
