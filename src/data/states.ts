

export type StateSlug =
  | "baden-wuerttemberg"
  | "bayern"
  | "berlin"
  | "brandenburg"
  | "bremen"
  | "hamburg"
  | "hessen"
  | "mecklenburg-vorpommern"
  | "niedersachsen"
  | "nordrhein-westfalen"
  | "rheinland-pfalz"
  | "saarland"
  | "sachsen"
  | "sachsen-anhalt"
  | "schleswig-holstein"
  | "thueringen";

export type GermanState = {
  slug: StateSlug;
  name: string;
  url: string;
  displayOrder: number;
};

export const germanStates: GermanState[] = [
  {
    slug: "baden-wuerttemberg",
    name: "Baden-Württemberg",
    url: "/einschulung-baden-wuerttemberg/",
    displayOrder: 1,
  },
  {
    slug: "bayern",
    name: "Bayern",
    url: "/einschulung-bayern/",
    displayOrder: 2,
  },
  {
    slug: "berlin",
    name: "Berlin",
    url: "/einschulung-berlin/",
    displayOrder: 3,
  },
  {
    slug: "brandenburg",
    name: "Brandenburg",
    url: "/einschulung-brandenburg/",
    displayOrder: 4,
  },
  {
    slug: "bremen",
    name: "Bremen",
    url: "/einschulung-bremen/",
    displayOrder: 5,
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    url: "/einschulung-hamburg/",
    displayOrder: 6,
  },
  {
    slug: "hessen",
    name: "Hessen",
    url: "/einschulung-hessen/",
    displayOrder: 7,
  },
  {
    slug: "mecklenburg-vorpommern",
    name: "Mecklenburg-Vorpommern",
    url: "/einschulung-mecklenburg-vorpommern/",
    displayOrder: 8,
  },
  {
    slug: "niedersachsen",
    name: "Niedersachsen",
    url: "/einschulung-niedersachsen/",
    displayOrder: 9,
  },
  {
    slug: "nordrhein-westfalen",
    name: "Nordrhein-Westfalen",
    url: "/einschulung-nordrhein-westfalen/",
    displayOrder: 10,
  },
  {
    slug: "rheinland-pfalz",
    name: "Rheinland-Pfalz",
    url: "/einschulung-rheinland-pfalz/",
    displayOrder: 11,
  },
  {
    slug: "saarland",
    name: "Saarland",
    url: "/einschulung-saarland/",
    displayOrder: 12,
  },
  {
    slug: "sachsen",
    name: "Sachsen",
    url: "/einschulung-sachsen/",
    displayOrder: 13,
  },
  {
    slug: "sachsen-anhalt",
    name: "Sachsen-Anhalt",
    url: "/einschulung-sachsen-anhalt/",
    displayOrder: 14,
  },
  {
    slug: "schleswig-holstein",
    name: "Schleswig-Holstein",
    url: "/einschulung-schleswig-holstein/",
    displayOrder: 15,
  },
  {
    slug: "thueringen",
    name: "Thüringen",
    url: "/einschulung-thueringen/",
    displayOrder: 16,
  },
];

export const germanStatesBySlug = Object.fromEntries(
  germanStates.map((state) => [state.slug, state]),
) as Record<StateSlug, GermanState>;