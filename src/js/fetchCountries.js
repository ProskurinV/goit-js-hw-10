export function fetchCountries(name) {
  const mainUrl = 'https:restcountries.com/v3.1/name/';
  const searchFilter = '?fields=name,capital,population,flags,languages';
  return fetch(`${mainUrl}${name}${searchFilter}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   });
// }
