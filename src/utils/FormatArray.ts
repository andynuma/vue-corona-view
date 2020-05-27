const { flag } = require('country-emoji'); // eslint-disable-line

export const setCountryEmoji = (countryName: string) =>
  flag(countryName) ? `${flag(countryName)} ${countryName}` : countryName;

export const FormatArray = (arr: Feature[] | undefined) => {
  if (arr !== undefined) {
    const formattedArray = arr
      .map((f: any) => f.attributes)
      .map((f: any) => ({
        name: setCountryEmoji(f.Country_Region),
        confirmed: f.Confirmed,
        deaths: f.Deaths,
        recovered: f.Recovered,
      }));

    return formattedArray;
  }
};
