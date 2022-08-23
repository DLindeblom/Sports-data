const NHL = [
  {
    name: "Carolina Hurricanes",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "PNC Arena",
      location: "Raleigh, North Carolina",
      capacity: 18680
    },
    founded: 1972,
    formerly: ["New England Whalers", "Hartford Whalers"],
    cups: 1,
    cupYears: [2006]
  },
  {
    name: "New York Rangers",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Madison Square Garden",
      location: "New York City, New York",
      capacity: 18006
    },
    founded: 1926,
    formerly: [],
    cups: 4,
    cupYears: [1928, 1933, 1940, 1994]
  },
  {
    name: "Pittsburgh Penguins",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "PPG Paints Arena",
      location: "Pittsburgh, Pennsylvania",
      capacity: 19758
    },
    founded: 1967,
    cups: 5,
    cupYears: [1991, 1992, 2009, 2016, 2017]
  },
  {
    name: "Washington Capitals",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Capital One Arena",
      location: "Washington, D.C.",
      capacity: 20356
    },
    founded: 1974,
    cups: 1,
    cupYears: [2018]
  },
  {
    name: "New York Islanders",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "UBS Arena",
      location: "Elmont, New York",
      capacity: 17255
    },
    founded: 1972,
    cups: 4,
    cupYears: [1980, 1981, 1982, 1983]
  },
  {
    name: "Columbus Blue Jackets",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Nationwide Arena",
      location: "Columbus, Ohio",
      capacity: 20000
    },
    founded: 1997,
    cups: 0,
    cupYears: []
  },
  {
    name: "New Jersey Devils",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Prudential Center",
      location: "Newark, New Jersey",
      capacity: 19500
    },
    founded: 1974,
    formerly: ["Kansas City Scouts, Colorado Rockies"],
    cups: 3,
    cupYears: [1995, 2000, 2003]
  },
  {
    name: "Philadelphia Flyers",
    division: "Metropolitan",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Wells Fargo Center",
      location: "Philadelphia, Pennsylvania",
      capacity: 19500
    },
    founded: 1967,
    cups: 2,
    cupYears: [1974, 1975]
  },
  {
    name: "Florida Panthers",
    division: "Atlantic",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "FLA Live Arena",
      location: "Sunrise, Florida",
      capacity: 20737
    },
    founded: 1993,
    cups: 0,
    cupYears: []
  },
  {
    name: "Toronto Maple Leafs",
    division: "Atlantic",
    conference: "Eastern",
    country: "Canada",
    stadium: {
      name: "Scotiabank Arena",
      location: "Toronto, Ontario",
      capacity: 19800,
    },
    founded: 1917,
    formerly: ["Toronto Arenas", "Toronto St. Patricks"],
    cups: 13,
    cupYears: [1918, 1922, 1932, 1942, 1945, 1947, 1948, 1949, 1951, 1962, 1963, 1967]
  },
  {
    name: "Tampa Bay Lightning",
    division: "Atlantic",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Amalie Arena",
      location: "Tampa, Florida",
      capacity: 21500
    },
    founded: 1992,
    cups: 3,
    cupYears: [2004, 2020, 2021]
  },
  {
    name: "Boston Bruins",
    division: "Atlantic",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "TD Garden Arena",
      location: "Boston, Massachusetts",
      capacity: 19580
    },
    founded: 1924,
    cups: 6,
    cupYears: [1929, 1939, 1941, 1970, 1972, 2011]
  },
  {
    name: "Buffalo Sabres",
    division: "Atlantic",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "KeyBank Center",
      location: "Buffalo, New York",
      capacity: 19200,
    },
    founded: 1970,
    cups: 0,
    cupYears: []
  },
  {
    name: "Detroit Red Wings",
    division: "Atlantic",
    conference: "Eastern",
    country: "United States",
    stadium: {
      name: "Little Caesars Arena",
      location: "Detroit, Michigan",
      capacity: 19515,
    },
    founded: 1926,
    formerly: ["Detroit Cougars"],
    cups: 11,
    cupYears: [1936, 1937, 1943, 1950, 1952, 1954, 1955, 1997, 1998, 2002, 2008]
  },
  {
    name: "Ottawa Senators",
    division: "Atlantic",
    conference: "Eastern",
    country: "Canada",
    stadium: {
      name: "Canadian Tire Centre",
      location: "Kanata, Ontario",
      capacity: 19153,
    },
    founded: 1992,
    cups: 0,
    cupYears: []
  },
  {
    name: "Montreal Canadiens",
    division: "Atlantic",
    conference: "Eastern",
    country: "Canada",
    stadium: {
      name: "Centre Bell",
      location: "Montreal, Quebec",
      capacity: 21302
    },
    founded: 1910,
    cups: 24,
    cupYears: [1916, 1924, 1930, 1931, 1944, 1946, 1953, 1956, 1957, 1958, 1959, 1960, 1965, 1966, 1968, 1969, 1971, 1973, 1976, 1977, 1978, 1979, 1986, 1993]
  },
  {
    name: "Colorado Avalanche",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Ball Arena",
      location: "Denver, Colorado",
      capacity: 20000,
    },
    founded: 1972,
    formerly: ["Quebec Nordiques"],
    cups: 3,
    cupYears: [1996, 2001, 2022]
  },
  {
    name: "Minnesota Wild",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Xcel Energy Center",
      location: "Saint Paul, Minnesota",
      capacity: 20554
    },
    founded: 2000,
    cups: 0,
    cupYears: []
  },
  {
    name: "St. Louis Blues",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Enterprise Center",
      location: "St. Louis, Missouri",
      capacity: 19260
    },
    founded: 1967,
    cups: 1,
    cupYears: [2019]
  },
  {
    name: "Dallas Stars",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "American Airlines Center",
      location: "Dallas, Texas",
      capacity: 20000,
    },
    founded: 1967,
    formerly: ["Minnesota North Stars"],
    cups: 1,
    cupYears: [1999]
  },
  {
    name: "Nashville Predators",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Bridgestone Arena",
      location: "Nashville, Tennessee",
      capacity: 19891,
    },
    founded: 1998,
    cups: 0,
    cupYears: []
  },
  {
    name: "Winnipeg Jets",
    division: "Central",
    conference: "Western",
    country: "Canada",
    stadium: {
      name: "Canada Life Centre",
      location: "Winnipeg, Manitoba",
      capacity: 15321
    },
    founded: 1999,
    formerly: ["Atlanta Thrashers"],
    cups: 0,
    cupYears: []
  },
  {
    name: "Chicago Blackhawks",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "United Center",
      location: "Chicago, Illinois",
      capacity: 23500,
    },
    founded: 1926,
    formerly: ["Chicago Black Hawks"],
    cups: 6,
    cupYears: [1934, 1938, 1961, 2010, 2013, 2015]
  },
  {
    name: "Arizona Coyotes",
    division: "Central",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Arizona State University Arena",
      location: "Tempe, Arizona",
      capacity: 5000
    },
    founded: 1972,
    formerly: ["Winnipeg Jets", "Phoenix Coyotes"],
    cups: 0,
    cupYears: []
  },
  {
    name: "Calgary Flames",
    division: "Pacific",
    conference: "Western",
    country: "Canada",
    stadium: {
      name: "Scotiabank Saddledome",
      location: "Calgary, Alberta",
      capacity: 19289
    },
    founded: 1972,
    cups: 1,
    cupYears: [1989]
  },
  {
    name: "Edmonton Oilers",
    division: "Pacific",
    conference: "Western",
    country: "Canada",
    stadium: {
      name: "Rogers Place",
      location: "Edmonton, Alberta",
      capacity: 18500
    },
    founded: 1972,
    formerly: ["Alberta Oilers"],
    cups: 5,
    cupYears: [1984, 1985, 1987, 1988, 1990]
  },
  {
    name: "Los Angeles Kings",
    division: "Pacific",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Crypto.com Arena",
      location: "Los Angeles, California",
      capacity: 20000
    },
    founded: 1966,
    cups: 2,
    cupYears: [2012, 2014]
  },
  {
    name: "Vegas Goldne Knights",
    division: "Pacific",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "T-Mobile Arena",
      location: "Las Vegas, Nevada",
      capacity: 17500
    },
    founded: 2017,
    cups: 0,
    cupYears: []
  },
  {
    name: "Vancouver Canucks",
    division: "Pacific",
    conference: "Western",
    country: "Canada",
    stadium: {
      name: "Rogers Arena",
      location: "Vancouver, British Columbia",
      capacity: 18910
    },
    founded: 1945,
    cups: 0,
    cupYears: []
  },
  {
    name: "San Jose Sharks",
    division: "Pacific",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "SAP Center at San Jose",
      location: "San Jose, California",
      capacity: 17562
    },
    founded: 1991,
    cups: 0,
    cupYears: []
  },
  {
    name: "Anaheim Ducks",
    division: "Pacific",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Honda Center",
      location: "Anaheim,, California",
      capacity: 18336
    },
    founded: 1993,
    formerly: ["Mighty Ducks of Anaheim"],
    cups: 1,
    cupYears: [2007]
  },
  {
    name: "Seattle Kraken",
    division: "Pacific",
    conference: "Western",
    country: "United States",
    stadium: {
      name: "Climate Pledge Arena",
      location: "Seattle, Washington",
      capacity: 17459
    },
    founded: 2018,
    cups: 0,
    cupYears: []
  }
];