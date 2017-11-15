export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'https://javascript-jbilalat.c9users.io:8081/' : 'https://mysterious-dawn-16770.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
