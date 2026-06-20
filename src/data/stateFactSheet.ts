import type { StateSlug } from "./states";

export type SchoolYear = "2026/2027" | "2027/2028" | "2028/2029";

export type EnrollmentDateQualifier = "schulabhängig" | "voraussichtlich" | null;

export type EnrollmentRuleType =
  | "standard"
  | "corridor"
  | "optional"
  | "berlin_optional"
  | "brandenburg_optional"
  | "karenzzeit"
  | "flexible_window"
  | "registration_window";

export type SourceStatus =
  | "offiziell bestätigt"
  | "voraussichtlich"
  | "noch nicht veröffentlicht";

export type QuickFactCardVariant = "default" | "highlight" | "season";

export type QuickFactCard = {
  title: string;
  value: string;
  text: string;
  variant?: QuickFactCardVariant;
};

export type StateSource = {
  label: string;
  url: string;
  type: "ministerium" | "schulportal" | "gesetz" | "ferien" | "sonstige";
};

export type EnrollmentSpecialWindow = {
  from: string;
  to: string;
  label: string;
};

export type StateRules = {
  cutoff: string;
  cutoffLabel: string;
  type: EnrollmentRuleType;
  regularStatusLabel: string;
  specialRuleLabel: string;
  specialWindow?: EnrollmentSpecialWindow;
  allowsEarlyEnrollment: boolean;
  allowsDeferral: boolean;
  legalNote?: string;
  ruleVersion: string;
};

export type SummerHolidayFacts = {
  start: string | null;
  end: string | null;
  label: string;
};

export type StateSchoolYearFacts = {
  schoolYear: SchoolYear;
  enrollment: string | null;
  enrollmentLabel: string;
  enrollmentQualifier: EnrollmentDateQualifier;
  firstSchoolDay: string | null;
  firstSchoolDayLabel: string;
  note: string;
  hasConfirmedDate: boolean;
  sourceStatus: SourceStatus;
  lastVerified: string;
  summerHolidays: SummerHolidayFacts;
};

export type StateFactSheet = {
  slug: StateSlug;
  name: string;
  url: string;
  displayOrder: number;
  dataStatus: string;
  rules: StateRules;
  schoolYears: Record<SchoolYear, StateSchoolYearFacts>;
  specialNote?: {
    title: string;
    text: string;
  };
  sources: StateSource[];
};

const DATA_STATUS = "Stand Juni 2026";
const CURRENT_SCHOOL_YEAR: SchoolYear = "2026/2027";
const FUTURE_DATA_NOTE =
  "Die offiziellen Einschulungs- und Schuljahrestermine für dieses Schuljahr sind noch nicht vollständig veröffentlicht. Sobald belastbare Angaben vorliegen, werden sie zentral ergänzt.";

function createUnpublishedSchoolYear(
  schoolYear: SchoolYear,
  summerHolidays: SummerHolidayFacts = {
    start: null,
    end: null,
    label: "Termin folgt",
  },
): StateSchoolYearFacts {
  return {
    schoolYear,
    enrollment: null,
    enrollmentLabel: "Termin folgt",
    enrollmentQualifier: null,
    firstSchoolDay: null,
    firstSchoolDayLabel: "Termin folgt",
    note: FUTURE_DATA_NOTE,
    hasConfirmedDate: false,
    sourceStatus: "noch nicht veröffentlicht",
    lastVerified: "2026-06-20",
    summerHolidays,
  };
}

function createSchoolYearFacts({
  schoolYear,
  enrollment,
  enrollmentQualifier,
  firstSchoolDay,
  note,
  hasConfirmedDate,
  sourceStatus,
  lastVerified,
  summerHolidays,
  enrollmentLabel,
  firstSchoolDayLabel,
}: {
  schoolYear: SchoolYear;
  enrollment: string | null;
  enrollmentQualifier: EnrollmentDateQualifier;
  firstSchoolDay: string | null;
  note: string;
  hasConfirmedDate: boolean;
  sourceStatus: SourceStatus;
  lastVerified: string;
  summerHolidays: SummerHolidayFacts;
  enrollmentLabel?: string;
  firstSchoolDayLabel?: string;
}): StateSchoolYearFacts {
  return {
    schoolYear,
    enrollment,
    enrollmentLabel: enrollmentLabel ?? enrollment ?? "Termin folgt",
    enrollmentQualifier,
    firstSchoolDay,
    firstSchoolDayLabel: firstSchoolDayLabel ?? firstSchoolDay ?? "Termin folgt",
    note,
    hasConfirmedDate,
    sourceStatus,
    lastVerified,
    summerHolidays,
  };
}

const summerHolidayPeriods2027: Record<StateSlug, SummerHolidayFacts> = {
  "baden-wuerttemberg": {
    start: "Donnerstag, 29. Juli 2027",
    end: "Samstag, 11. September 2027",
    label: "Donnerstag, 29. Juli – Samstag, 11. September",
  },
  bayern: {
    start: "Montag, 2. August 2027",
    end: "Montag, 13. September 2027",
    label: "Montag, 2. August – Montag, 13. September",
  },
  berlin: {
    start: "Donnerstag, 1. Juli 2027",
    end: "Samstag, 14. August 2027",
    label: "Donnerstag, 1. Juli – Samstag, 14. August",
  },
  brandenburg: {
    start: "Donnerstag, 1. Juli 2027",
    end: "Samstag, 14. August 2027",
    label: "Donnerstag, 1. Juli – Samstag, 14. August",
  },
  bremen: {
    start: "Donnerstag, 8. Juli 2027",
    end: "Mittwoch, 18. August 2027",
    label: "Donnerstag, 8. Juli – Mittwoch, 18. August",
  },
  hamburg: {
    start: "Donnerstag, 1. Juli 2027",
    end: "Mittwoch, 11. August 2027",
    label: "Donnerstag, 1. Juli – Mittwoch, 11. August",
  },
  hessen: {
    start: "Montag, 28. Juni 2027",
    end: "Freitag, 6. August 2027",
    label: "Montag, 28. Juni – Freitag, 6. August",
  },
  "mecklenburg-vorpommern": {
    start: "Montag, 5. Juli 2027",
    end: "Samstag, 14. August 2027",
    label: "Montag, 5. Juli – Samstag, 14. August",
  },
  niedersachsen: {
    start: "Donnerstag, 8. Juli 2027",
    end: "Mittwoch, 18. August 2027",
    label: "Donnerstag, 8. Juli – Mittwoch, 18. August",
  },
  "nordrhein-westfalen": {
    start: "Montag, 19. Juli 2027",
    end: "Dienstag, 31. August 2027",
    label: "Montag, 19. Juli – Dienstag, 31. August",
  },
  "rheinland-pfalz": {
    start: "Montag, 28. Juni 2027",
    end: "Freitag, 6. August 2027",
    label: "Montag, 28. Juni – Freitag, 6. August",
  },
  saarland: {
    start: "Montag, 28. Juni 2027",
    end: "Freitag, 6. August 2027",
    label: "Montag, 28. Juni – Freitag, 6. August",
  },
  sachsen: {
    start: "Samstag, 10. Juli 2027",
    end: "Freitag, 20. August 2027",
    label: "Samstag, 10. Juli – Freitag, 20. August",
  },
  "sachsen-anhalt": {
    start: "Samstag, 10. Juli 2027",
    end: "Freitag, 20. August 2027",
    label: "Samstag, 10. Juli – Freitag, 20. August",
  },
  "schleswig-holstein": {
    start: "Samstag, 3. Juli 2027",
    end: "Samstag, 14. August 2027",
    label: "Samstag, 3. Juli – Samstag, 14. August",
  },
  thueringen: {
    start: "Samstag, 10. Juli 2027",
    end: "Freitag, 20. August 2027",
    label: "Samstag, 10. Juli – Freitag, 20. August",
  },
};
const unpublished2028 = createUnpublishedSchoolYear("2028/2029");

export const stateFactSheets = {
  "baden-wuerttemberg": {
    slug: "baden-wuerttemberg",
    name: "Baden-Württemberg",
    url: "/einschulung-baden-wuerttemberg/",
    displayOrder: 1,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Stichtagsflexibilisierung",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder, die nach dem Stichtag sechs Jahre alt werden, können über die Stichtagsflexibilisierung angemeldet werden.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 19. September 2026",
        enrollmentQualifier: "schulabhängig",
        firstSchoolDay: "Montag, 14. September 2026",
        note:
          "Der genaue Einschulungstermin wird von der jeweiligen Grundschule festgelegt; Samstag, 19. September 2026 dient als Orientierung.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 30. Juli 2026",
          end: "Samstag, 12. September 2026",
          label: "Donnerstag, 30. Juli – Samstag, 12. September",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["baden-wuerttemberg"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  bayern: {
    slug: "bayern",
    name: "Bayern",
    url: "/einschulung-bayern/",
    displayOrder: 2,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "09-30",
      cutoffLabel: "30. September",
      type: "corridor",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Einschulungskorridor",
      specialWindow: {
        from: "07-01",
        to: "09-30",
        label: "Einschulungskorridor",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder, die zwischen dem 1. Juli und dem 30. September sechs Jahre alt werden, liegen im Einschulungskorridor.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Mittwoch, 16. September 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Dienstag, 15. September 2026",
        note:
          "Der erste Schultag nach den Sommerferien ist Dienstag, 15. September 2026; Schulanfängerinnen und Schulanfänger starten am Mittwoch, 16. September 2026.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 3. August 2026",
          end: "Montag, 14. September 2026",
          label: "Montag, 3. August – Montag, 14. September",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.bayern),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  berlin: {
    slug: "berlin",
    name: "Berlin",
    url: "/einschulung-berlin/",
    displayOrder: 3,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "09-30",
      cutoffLabel: "30. September",
      type: "berlin_optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      specialWindow: {
        from: "10-01",
        to: "03-31",
        label: "Kann-Kind-Regelung",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "In Berlin können Kinder im Zeitraum der Kann-Kind-Regelung auf Antrag vorzeitig eingeschult werden, wenn die Voraussetzungen erfüllt sind.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 29. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 31. August 2026",
        note:
          "Der konkrete Ablauf der Einschulungsfeier wird von der zuständigen Grundschule festgelegt.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 9. Juli 2026",
          end: "Samstag, 22. August 2026",
          label: "Donnerstag, 9. Juli – Samstag, 22. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.berlin),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  brandenburg: {
    slug: "brandenburg",
    name: "Brandenburg",
    url: "/einschulung-brandenburg/",
    displayOrder: 4,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "09-30",
      cutoffLabel: "30. September",
      type: "brandenburg_optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag / Aufnahme im Ausnahmefall",
      specialWindow: {
        from: "10-01",
        to: "12-31",
        label: "Kann-Kind auf Antrag",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Stand Juni 2026: Brandenburg plant eine Verlegung des Stichtags auf den 30. Juni. Bis zur gesetzlichen Umsetzung gilt der 30. September.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 22. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 24. August 2026",
        note: "Die Einschulungsfeiern finden in der Regel am Samstag vor dem ersten Schultag statt.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 9. Juli 2026",
          end: "Samstag, 22. August 2026",
          label: "Donnerstag, 9. Juli – Samstag, 22. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.brandenburg),
      "2028/2029": unpublished2028,
    },
    specialNote: {
      title: "Hinweis zur geplanten Stichtagsänderung",
      text:
        "Stand Juni 2026 plant Brandenburg eine Verlegung des Stichtags auf den 30. Juni. Bis zur gesetzlichen Umsetzung gilt weiterhin der 30. September.",
    },
    sources: [],
  },
  bremen: {
    slug: "bremen",
    name: "Bremen",
    url: "/einschulung-bremen/",
    displayOrder: 5,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "karenzzeit",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Karenzzeitkind / vorzeitige Einschulung auf Antrag",
      specialWindow: {
        from: "07-01",
        to: "09-30",
        label: "Karenzzeit",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder im Zeitraum nach dem 30. Juni können in Bremen je nach Geburtsdatum als Karenzzeitkind oder auf Antrag eingeordnet werden.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 15. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Donnerstag, 13. August 2026",
        note:
          "Die Einschulungsfeier für Erstklässlerinnen und Erstklässler ist offiziell für Samstag, 15. August 2026 festgelegt.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 2. Juli 2026",
          end: "Mittwoch, 12. August 2026",
          label: "Donnerstag, 2. Juli – Mittwoch, 12. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.bremen),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  hamburg: {
    slug: "hamburg",
    name: "Hamburg",
    url: "/einschulung-hamburg/",
    displayOrder: 6,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "07-01",
      cutoffLabel: "1. Juli",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Vorzeitige Einschulung auf Antrag möglich",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder, die bis zum 1. Juli das sechste Lebensjahr vollendet haben, werden am 1. August desselben Kalenderjahres schulpflichtig. Jüngere Kinder können auf Antrag vorzeitig eingeschult werden.",
      ruleVersion: "2026-06",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "24.–25. August 2026",
        enrollmentQualifier: "schulabhängig",
        firstSchoolDay: "Donnerstag, 20. August 2026",
        note:
          "Die Einschulungstermine werden von den Schulen selbst festgelegt und über die jeweilige Schule bekanntgegeben; häufig starten Erstklässlerinnen und Erstklässler am Montag oder Dienstag nach dem ersten Schultag.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 9. Juli 2026",
          end: "Mittwoch, 19. August 2026",
          label: "Donnerstag, 9. Juli – Mittwoch, 19. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.hamburg),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  hessen: {
    slug: "hessen",
    name: "Hessen",
    url: "/einschulung-hessen/",
    displayOrder: 7,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "07-01",
      cutoffLabel: "1. Juli",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Für Kinder in Hessen, die bis einschließlich 1. Juli geboren sind und damit bis zum 30. Juni das sechste Lebensjahr vollenden, beginnt am 1. August die Schulpflicht. Jüngere Kinder können auf Antrag vorzeitig eingeschult werden.",
      ruleVersion: "2026-06",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Dienstag, 11. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 10. August 2026",
        note:
          "Die Einschulung liegt meist am Dienstag nach dem ersten Schultag; den genauen Termin legt die zuständige Grundschule fest.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 29. Juni 2026",
          end: "Freitag, 7. August 2026",
          label: "Montag, 29. Juni – Freitag, 7. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.hessen),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  "mecklenburg-vorpommern": {
    slug: "mecklenburg-vorpommern",
    name: "Mecklenburg-Vorpommern",
    url: "/einschulung-mecklenburg-vorpommern/",
    displayOrder: 8,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden, wenn sie hinreichend entwickelt sind.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 22. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 24. August 2026",
        note:
          "Die Einschulung findet voraussichtlich am Ende der Sommerferien statt; den konkreten Ablauf legt die zuständige Grundschule fest.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 13. Juli 2026",
          end: "Samstag, 22. August 2026",
          label: "Montag, 13. Juli – Samstag, 22. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["mecklenburg-vorpommern"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  niedersachsen: {
    slug: "niedersachsen",
    name: "Niedersachsen",
    url: "/einschulung-niedersachsen/",
    displayOrder: 9,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "09-30",
      cutoffLabel: "30. September",
      type: "flexible_window",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Flexibler Einschulungszeitraum",
      specialWindow: {
        from: "07-01",
        to: "09-30",
        label: "Flexibler Einschulungszeitraum",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder, die zwischen dem 1. Juli und dem 30. September sechs Jahre alt werden, können den Schulbesuch um ein Jahr hinausschieben. Der 1.-Oktober-Sonderfall ist rechtlich gesondert zu beachten.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 15. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Donnerstag, 13. August 2026",
        note:
          "Kinder, die zwischen dem 1. Juli und 30. September sechs Jahre alt werden, können den Schulbesuch um ein Jahr hinausschieben; der 1.-Oktober-Sonderfall ist rechtlich gesondert zu beachten.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Donnerstag, 2. Juli 2026",
          end: "Mittwoch, 12. August 2026",
          label: "Donnerstag, 2. Juli – Mittwoch, 12. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.niedersachsen),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  "nordrhein-westfalen": {
    slug: "nordrhein-westfalen",
    name: "Nordrhein-Westfalen",
    url: "/einschulung-nordrhein-westfalen/",
    displayOrder: 10,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "09-30",
      cutoffLabel: "30. September",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden; die Entscheidung trifft die Schulleitung.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "2.–3. September 2026",
        enrollmentLabel: "spätestens Donnerstag, 3. September 2026",
        enrollmentQualifier: "schulabhängig",
        firstSchoolDay: "Mittwoch, 2. September 2026",
        note:
          "Die Einschulung findet in der Regel spätestens am zweiten Schultag nach den Sommerferien statt; der konkrete Termin ist schulabhängig.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 20. Juli 2026",
          end: "Dienstag, 1. September 2026",
          label: "Montag, 20. Juli – Dienstag, 1. September",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["nordrhein-westfalen"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  "rheinland-pfalz": {
    slug: "rheinland-pfalz",
    name: "Rheinland-Pfalz",
    url: "/einschulung-rheinland-pfalz/",
    displayOrder: 11,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "08-31",
      cutoffLabel: "31. August",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden, wenn die Entwicklung eine erfolgreiche Teilnahme erwarten lässt.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Montag, 10. August 2026",
        enrollmentQualifier: "schulabhängig",
        firstSchoolDay: "Montag, 10. August 2026",
        note:
          "Die Einschulung liegt in der Regel zum Schuljahresbeginn; den konkreten Termin legt die zuständige Grundschule fest.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 29. Juni 2026",
          end: "Freitag, 7. August 2026",
          label: "Montag, 29. Juni – Freitag, 7. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["rheinland-pfalz"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  saarland: {
    slug: "saarland",
    name: "Saarland",
    url: "/einschulung-saarland/",
    displayOrder: 12,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote: "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Montag, 10. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 10. August 2026",
        note: "Einschulung und erster Schultag fallen voraussichtlich auf denselben Tag.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Montag, 29. Juni 2026",
          end: "Freitag, 7. August 2026",
          label: "Montag, 29. Juni – Freitag, 7. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.saarland),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  sachsen: {
    slug: "sachsen",
    name: "Sachsen",
    url: "/einschulung-sachsen/",
    displayOrder: 13,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "registration_window",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Anmeldung bis 30. September möglich",
      specialWindow: {
        from: "07-01",
        to: "09-30",
        label: "Anmeldung bis 30. September möglich",
      },
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "In Sachsen gilt der 30. Juni als regulärer Stichtag. Kinder, die bis zum 30. September sechs Jahre alt werden, können durch Anmeldung der Eltern ebenfalls schulpflichtig werden.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 15. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 17. August 2026",
        note: "Die Schuleinführung findet am Samstag vor dem ersten Schultag statt.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Samstag, 4. Juli 2026",
          end: "Freitag, 14. August 2026",
          label: "Samstag, 4. Juli – Freitag, 14. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.sachsen),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  "sachsen-anhalt": {
    slug: "sachsen-anhalt",
    name: "Sachsen-Anhalt",
    url: "/einschulung-sachsen-anhalt/",
    displayOrder: 14,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden, wenn die erforderlichen Voraussetzungen vorliegen.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Samstag, 15. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 17. August 2026",
        note: "Den konkreten Ablauf der Einschulung legt die zuständige Grundschule fest.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Samstag, 4. Juli 2026",
          end: "Freitag, 14. August 2026",
          label: "Samstag, 4. Juli – Freitag, 14. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["sachsen-anhalt"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  "schleswig-holstein": {
    slug: "schleswig-holstein",
    name: "Schleswig-Holstein",
    url: "/einschulung-schleswig-holstein/",
    displayOrder: 15,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "06-30",
      cutoffLabel: "30. Juni",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote: "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Mittwoch, 19. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 17. August 2026",
        note: "Die Einschulung an Grundschulen findet nach dem Erlass am dritten Schultag nach den Ferien statt.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Samstag, 4. Juli 2026",
          end: "Samstag, 15. August 2026",
          label: "Samstag, 4. Juli – Samstag, 15. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027["schleswig-holstein"]),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
  thueringen: {
    slug: "thueringen",
    name: "Thüringen",
    url: "/einschulung-thueringen/",
    displayOrder: 16,
    dataStatus: DATA_STATUS,
    rules: {
      cutoff: "08-01",
      cutoffLabel: "1. August",
      type: "optional",
      regularStatusLabel: "Regulär schulpflichtig",
      specialRuleLabel: "Kann-Kind auf Antrag",
      allowsEarlyEnrollment: true,
      allowsDeferral: true,
      legalNote:
        "Eine vorzeitige Einschulung kann auf Antrag geprüft werden; die Entscheidung liegt bei der Schulleitung im Benehmen mit dem Schularzt.",
      ruleVersion: "2026-05",
    },
    schoolYears: {
      "2026/2027": createSchoolYearFacts({
        schoolYear: "2026/2027",
        enrollment: "Montag, 17. August 2026",
        enrollmentQualifier: null,
        firstSchoolDay: "Montag, 17. August 2026",
        note:
          "Einschulung und erster Schultag fallen voraussichtlich auf denselben Tag; den konkreten Ablauf legt die zuständige Grundschule fest.",
        hasConfirmedDate: true,
        sourceStatus: "offiziell bestätigt",
        lastVerified: "2026-05-17",
        summerHolidays: {
          start: "Samstag, 4. Juli 2026",
          end: "Freitag, 14. August 2026",
          label: "Samstag, 4. Juli – Freitag, 14. August",
        },
      }),
      "2027/2028": createUnpublishedSchoolYear("2027/2028", summerHolidayPeriods2027.thueringen),
      "2028/2029": unpublished2028,
    },
    sources: [],
  },
} satisfies Record<StateSlug, StateFactSheet>;

export const stateFactSheetList = Object.values(stateFactSheets).sort(
  (a, b) => a.displayOrder - b.displayOrder,
);

export function getStateFactSheet(slug: StateSlug): StateFactSheet {
  const factSheet = stateFactSheets[slug];

  if (!factSheet) {
    throw new Error(`No state fact sheet found for slug: ${slug}`);
  }

  return factSheet;
}

export function getStateSchoolYearFacts(
  slug: StateSlug,
  schoolYear: SchoolYear = CURRENT_SCHOOL_YEAR,
): StateSchoolYearFacts {
  const factSheet = getStateFactSheet(slug);
  const schoolYearFacts = factSheet.schoolYears[schoolYear];

  if (!schoolYearFacts) {
    throw new Error(`No school year facts found for ${slug} and ${schoolYear}`);
  }

  return schoolYearFacts;
}

export function getQuickFactCards(
  slug: StateSlug,
  schoolYear: SchoolYear = CURRENT_SCHOOL_YEAR,
): QuickFactCard[] {
  const factSheet = getStateFactSheet(slug);
  const schoolYearFacts = getStateSchoolYearFacts(slug, schoolYear);

  return [
    {
      title: "Stichtag",
      value: factSheet.rules.cutoffLabel,
      text: "Kinder, die bis zu diesem Datum sechs Jahre alt werden, werden in der Regel schulpflichtig.",
      variant: "highlight",
    },
    {
      title: "Nächste Einschulung",
      value: schoolYearFacts.enrollmentLabel,
      text: schoolYearFacts.hasConfirmedDate
        ? schoolYearFacts.note
        : "Der Termin wird ergänzt, sobald die offiziellen Angaben veröffentlicht sind.",
    },
    {
      title: "Erster Schultag",
      value: schoolYearFacts.firstSchoolDayLabel,
      text: `Erster Schultag im Schuljahr ${schoolYear}.`,
    },
    {
      title: "Sommerferien",
      value: schoolYearFacts.summerHolidays.label,
      text: "Angegeben sind der erste und der letzte Ferientag.",
      variant: "season",
    },
    {
      title: "Sonderregel",
      value: factSheet.rules.specialRuleLabel,
      text:
        factSheet.rules.legalNote ??
        "Die konkrete Entscheidung trifft die zuständige Schule nach Prüfung.",
    },
    {
      title: factSheet.rules.type === "flexible_window" ? "Flexibilität" : "Zurückstellung",
      value:
        factSheet.rules.type === "flexible_window"
          ? "Flexibler Einschulungszeitraum"
          : "Zurückstellung möglich",
      text: factSheet.rules.allowsDeferral
        ? "Eine spätere Einschulung kann je nach Landesregelung und Einzelfall geprüft werden."
        : "Eine Zurückstellung ist nur nach den jeweiligen Landesvorgaben möglich.",
    },
  ];
}

export function getCalculatorResultFacts(
  slug: StateSlug,
  schoolYear: SchoolYear,
): StateSchoolYearFacts {
  return getStateSchoolYearFacts(slug, schoolYear);
}