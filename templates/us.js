states_dict = {
    "MA": "Massachusetts",
    "MN": "Minnesota",
    "MT": "Montana",
    "ND": "North Dakota",
    "HI": "Hawaii",
    "ID": "Idaho",
    "WA": "Washington",
    "AZ": "Arizona",
    "CA": "California",
    "CO": "Colorado",
    "NV": "Nevada",
    "NM": "New Mexico",
    "OR": "Oregon",
    "UT": "Utah",
    "WY": "Wyoming",
    "AR": "Arkansas",
    "IA": "Iowa",
    "KS": "Kansas",
    "MO": "Missouri",
    "NE": "Nebraska",
    "OK": "Oklahoma",
    "SD": "South Dakota",
    "LA": "Louisiana",
    "TX": "Texas",
    "CT": "Connecticut",
    "NH": "New Hampshire",
    "RI": "Rhode Island",
    "VT": "Vermont",
    "AL": "Alabama",
    "FL": "Florida",
    "GA": "Georgia",
    "MS": "Mississippi",
    "SC": "South Carolina",
    "IL": "Illinois",
    "IN": "Indiana",
    "KY": "Kentucky",
    "NC": "North Carolina",
    "OH": "Ohio",
    "TN": "Tennessee",
    "VA": "Virginia",
    "WI": "Wisconsin",
    "WV": "West Virginia",
    "DE": "Delaware",
    "DC": "District of Columbia",
    "MD": "Maryland",
    "NJ": "New Jersey",
    "NY": "New York",
    "PA": "Pennsylvania",
    "ME": "Maine",
    "MI": "Michigan",
    "AK": "Alaska"
}

// reverse map
var countryMap = new Map()
for (var key in country_dict) {
    countryMap[country_dict[key].toLowerCase()] = key
}

function addCountry() {

    // adds to list
    var ul = document.getElementById("dynamic-list");

    // gets input tag
    var candidate = document.getElementById("input-country");

    // gets countryMap["bolivia"] which maps to BO
    var lowerCase = countryMap[candidate.value.toLowerCase()];
    if (lowerCase !== undefined) {
        var li = document.createElement("li");
        var capitalizedResult = country_dict[lowerCase];
        li.setAttribute('id', capitalizedResult);
        li.appendChild(document.createTextNode(capitalizedResult));
        ul.appendChild(li);
    }

    // colors country
    var country = document.getElementById("input-country").value.toLowerCase();
    var countryId = countryMap[country];
    document.getElementById(countryId).style.fill = "green";

}

function deleteCountry() {
    var country = document.getElementById("delete-country").value.toLowerCase();
    var countryId = countryMap[country];
    document.getElementById(countryId).style.fill = "#f2f2f2";

    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("delete-country");
    var item = document.getElementById(candidate.value);
    ul.removeChild(item);
}