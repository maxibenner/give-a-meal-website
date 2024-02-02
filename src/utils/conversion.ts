export const kilometersToMiles = (value: number) => {
  return value * 0.621371;
};
/**
 * Turns meters into prettified miles
 * Example:
 * 20.000 Meters -> 12 Miles
 * 3000 Meters -> 1.8 Miles
 * 800m -> 0.49 Miles
 * @param value Distanc ein meters
 * @param customTemplate Pass a custom template for displaying feet and miles. Use %d where you want the distance to be inserted. Example: { feet: "It is %d miles away "}
 * @param imperial Set to false to use metric system. This will not affect the text. Use a custom template for that.
 */
export const prettifyMeters = (value: number, customTemplate?: PrettifyOverride, metric: boolean = false) => {

  const kilometers = value / 1000;
  const miles = metric ? kilometers : kilometersToMiles(kilometers)
  const milesFormatted = miles <= 10 ? miles.toFixed(1) : miles.toFixed(0);
  const feet = (metric ? miles * 1000 : miles * 5280).toFixed(0);

  if (miles < 0.1) {
    if (customTemplate?.feet) return customTemplate.feet.replace("%d", feet)
    else return `${feet} feet away`;
  }
  else {
    if (customTemplate?.miles) return customTemplate.miles.replace("%d", milesFormatted)
    else return `${milesFormatted} miles away`;
  }
};

type PrettifyOverride = {
  feet: string;
  miles: string;
}
