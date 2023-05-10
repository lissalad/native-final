import data from "./metal.json";

export function getTotalBands() {
  return data.length;
}

export function getTotalFans() {
  const count = data.reduce((count, band) => count + band.fans * 1000, 0);
  return count.toLocaleString();
}

export function getUniqueOriginCountries() {
  const uniqueCountries = data
    .map((band) => band.origin)
    .filter((value, index, self) => self.indexOf(value) === index);
  return uniqueCountries.length;
}

export function getActive() {
  const activeBands = data.filter((band) => band.split === "-");
  return activeBands.length;
}

export function getSplit() {
  const splitBands = data.filter((band) => band.split !== "-");
  return splitBands.length;
}

export function getStyles() {
  const uniqueStyles = data
    .map((band) => band.style)
    .filter((value, index, self) => self.indexOf(value) === index);
  return uniqueStyles;
}
