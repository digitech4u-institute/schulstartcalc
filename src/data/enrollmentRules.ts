import type { StateSlug } from "./states";

export type EnrollmentRuleType =
  | "standard"
  | "corridor"
  | "optional"
  | "berlin_optional"
  | "brandenburg_optional"
  | "karenzzeit"
  | "flexible_window"
  | "registration_window";

export type EnrollmentSpecialWindow = {
  from: string;
  to: string;
  label: string;
};

export type EnrollmentRule = {
  stateSlug: StateSlug;
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

export const enrollmentRules: Record<StateSlug, EnrollmentRule> = {
  "baden-wuerttemberg": {
    stateSlug: "baden-wuerttemberg",
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

  bayern: {
    stateSlug: "bayern",
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

  berlin: {
    stateSlug: "berlin",
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

  brandenburg: {
    stateSlug: "brandenburg",
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
      "Stand Mai 2026: Brandenburg plant eine Verlegung des Stichtags auf den 30. Juni. Bis zur gesetzlichen Umsetzung gilt der 30. September.",
    ruleVersion: "2026-05",
  },

  bremen: {
    stateSlug: "bremen",
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

  hamburg: {
    stateSlug: "hamburg",
    cutoff: "06-30",
    cutoffLabel: "30. Juni",
    type: "optional",
    regularStatusLabel: "Regulär schulpflichtig",
    specialRuleLabel: "Vorzeitige Einschulung auf Antrag möglich",
    allowsEarlyEnrollment: true,
    allowsDeferral: true,
    legalNote:
      "Kinder, die nach dem 30. Juni sechs Jahre alt werden, können auf Antrag vorzeitig eingeschult werden.",
    ruleVersion: "2026-05",
  },

  hessen: {
    stateSlug: "hessen",
    cutoff: "06-30",
    cutoffLabel: "30. Juni",
    type: "optional",
    regularStatusLabel: "Regulär schulpflichtig",
    specialRuleLabel: "Kann-Kind auf Antrag",
    allowsEarlyEnrollment: true,
    allowsDeferral: true,
    legalNote:
      "Kinder nach dem Stichtag können auf Antrag der Eltern vorzeitig eingeschult werden.",
    ruleVersion: "2026-05",
  },

  "mecklenburg-vorpommern": {
    stateSlug: "mecklenburg-vorpommern",
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

  niedersachsen: {
    stateSlug: "niedersachsen",
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

  "nordrhein-westfalen": {
    stateSlug: "nordrhein-westfalen",
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

  "rheinland-pfalz": {
    stateSlug: "rheinland-pfalz",
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

  saarland: {
    stateSlug: "saarland",
    cutoff: "06-30",
    cutoffLabel: "30. Juni",
    type: "optional",
    regularStatusLabel: "Regulär schulpflichtig",
    specialRuleLabel: "Kann-Kind auf Antrag",
    allowsEarlyEnrollment: true,
    allowsDeferral: true,
    legalNote:
      "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden.",
    ruleVersion: "2026-05",
  },

  sachsen: {
    stateSlug: "sachsen",
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

  "sachsen-anhalt": {
    stateSlug: "sachsen-anhalt",
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

  "schleswig-holstein": {
    stateSlug: "schleswig-holstein",
    cutoff: "06-30",
    cutoffLabel: "30. Juni",
    type: "optional",
    regularStatusLabel: "Regulär schulpflichtig",
    specialRuleLabel: "Kann-Kind auf Antrag",
    allowsEarlyEnrollment: true,
    allowsDeferral: true,
    legalNote:
      "Kinder nach dem Stichtag können auf Antrag vorzeitig eingeschult werden.",
    ruleVersion: "2026-05",
  },

  thueringen: {
    stateSlug: "thueringen",
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
};