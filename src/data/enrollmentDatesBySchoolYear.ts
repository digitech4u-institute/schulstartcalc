import type { StateSlug } from "./states";

export type EnrollmentDateQualifier = "schulabhängig" | "voraussichtlich" | null;

export type EnrollmentDateEntry = {
  enrollment: string | null;
  enrollmentQualifier: EnrollmentDateQualifier;
  firstSchoolDay: string | null;
  note: string;
  hasConfirmedDate: boolean;
  sourceStatus: string;
  lastVerified: string;
};

export type EnrollmentDatesByState = Record<StateSlug, EnrollmentDateEntry>;

export type EnrollmentDatesBySchoolYear = Record<string, EnrollmentDatesByState>;

export const enrollmentDatesBySchoolYear: EnrollmentDatesBySchoolYear = {
  "2026/2027": {
    "baden-wuerttemberg": {
      enrollment: "Samstag, 19. September 2026",
      enrollmentQualifier: "schulabhängig",
      firstSchoolDay: "Montag, 14. September 2026",
      note:
        "Der genaue Einschulungstermin wird von der jeweiligen Grundschule festgelegt; Samstag, 19. September 2026 dient als Orientierung.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    bayern: {
      enrollment: "Mittwoch, 16. September 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Dienstag, 15. September 2026",
      note:
        "Der erste Schultag nach den Sommerferien ist Dienstag, 15. September 2026; Schulanfängerinnen und Schulanfänger starten am Mittwoch, 16. September 2026.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    berlin: {
      enrollment: "Samstag, 29. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 31. August 2026",
      note:
        "Der konkrete Ablauf der Einschulungsfeier wird von der zuständigen Grundschule festgelegt.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    brandenburg: {
      enrollment: "Samstag, 22. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 24. August 2026",
      note:
        "Die Einschulungsfeiern finden in der Regel am Samstag vor dem ersten Schultag statt.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    bremen: {
      enrollment: "Samstag, 15. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Donnerstag, 13. August 2026",
      note:
        "Die Einschulungsfeier für Erstklässlerinnen und Erstklässler ist offiziell für Samstag, 15. August 2026 festgelegt.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    hamburg: {
      enrollment: "24.–25. August 2026",
      enrollmentQualifier: "schulabhängig",
      firstSchoolDay: "Donnerstag, 20. August 2026",
      note:
        "Die Einschulungstermine werden von den Schulen selbst festgelegt und über die jeweilige Schule bekanntgegeben; häufig starten Erstklässlerinnen und Erstklässler am Montag oder Dienstag nach dem ersten Schultag.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    hessen: {
      enrollment: "Dienstag, 11. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 10. August 2026",
      note:
        "Die Einschulung liegt meist am Dienstag nach dem ersten Schultag; den genauen Termin legt die zuständige Grundschule fest.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    "mecklenburg-vorpommern": {
      enrollment: "Samstag, 22. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 24. August 2026",
      note:
        "Die Einschulung findet voraussichtlich am Ende der Sommerferien statt; den konkreten Ablauf legt die zuständige Grundschule fest.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    niedersachsen: {
      enrollment: "Samstag, 15. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Donnerstag, 13. August 2026",
      note:
        "Kinder, die zwischen dem 1. Juli und 30. September sechs Jahre alt werden, können den Schulbesuch um ein Jahr hinausschieben; der 1.-Oktober-Sonderfall ist rechtlich gesondert zu beachten.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    "nordrhein-westfalen": {
      enrollment: "2.–3. September 2026",
      enrollmentQualifier: "schulabhängig",
      firstSchoolDay: "Mittwoch, 2. September 2026",
      note:
        "Die Einschulung findet in der Regel spätestens am zweiten Schultag nach den Sommerferien statt; der konkrete Termin ist schulabhängig.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    "rheinland-pfalz": {
      enrollment: "Montag, 10. August 2026",
      enrollmentQualifier: "schulabhängig",
      firstSchoolDay: "Montag, 10. August 2026",
      note:
        "Die Einschulung liegt in der Regel zum Schuljahresbeginn; den konkreten Termin legt die zuständige Grundschule fest.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    saarland: {
      enrollment: "Montag, 10. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 10. August 2026",
      note:
        "Einschulung und erster Schultag fallen voraussichtlich auf denselben Tag.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    sachsen: {
      enrollment: "Samstag, 15. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 17. August 2026",
      note:
        "Die Schuleinführung findet am Samstag vor dem ersten Schultag statt.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    "sachsen-anhalt": {
      enrollment: "Samstag, 15. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 17. August 2026",
      note:
        "Den konkreten Ablauf der Einschulung legt die zuständige Grundschule fest.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    "schleswig-holstein": {
      enrollment: "Mittwoch, 19. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 17. August 2026",
      note:
        "Die Einschulung an Grundschulen findet nach dem Erlass am dritten Schultag nach den Ferien statt.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },

    thueringen: {
      enrollment: "Montag, 17. August 2026",
      enrollmentQualifier: null,
      firstSchoolDay: "Montag, 17. August 2026",
      note:
        "Einschulung und erster Schultag fallen voraussichtlich auf denselben Tag; den konkreten Ablauf legt die zuständige Grundschule fest.",
      hasConfirmedDate: true,
      sourceStatus: "Stand Mai 2026",
      lastVerified: "2026-05-17",
    },
  },
};