'use strict'

// Stores API keys, URL endpoints, and search parameters:
let APIInfo = {
  wikipedia: {
    URL: "https://en.wikipedia.org/w/api.php",
    searchParams: {
      origin: '*',
      action: 'query',
      format: 'json',
      prop: 'extracts|pageimages',
      titles: "This value is replaced by handleFormInput()",
      indexpageids: 1,
      redirects: 1, 
      exchars: 1200,
      // explaintext: 1,
      exsectionformat: 'plain',
      piprop: 'name|thumbnail|original',
      pithumbsize: 250  
    }
  },
  youtube: {
    URL: "https://www.googleapis.com/youtube/v3/search",
    searchParams: {
      key: "AIzaSyAZ7f_TuBgtdcgXIhd2HouvK2Qu_jMpGX4",
      q: "This value is replaced by handleFormInput()",
      part: 'snippet',
      maxResults: '20',
      type: 'video', },
  },
  itunes: {
    URL: "https://itunes.apple.com/search",
    searchParams: {
      term: "This value is replaced by handleFormInput()",
      limit: "25",
    },
  },
  google: {
    URL: "https://www.googleapis.com/customsearch/v1",
    searchParams: {
      key: "AIzaSyAZ7f_TuBgtdcgXIhd2HouvK2Qu_jMpGX4",
      cx: '000457940223891916115:vv6akwfhiiy',
      q: "This value is replaced by handleFormInput()",
      searchType: "image",
      maxResults: '20',
      },
  },
}

// Stores API response data in separate keys:
let responseData = {
  wikipedia: {},
  youtube: {},
  itunes: {},
  google: {},
  spotify: {},
  tastedive: {},
  ticketmaster: {},
}

function formatQuery(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&')
}

//https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=20


function fetchAPIData(apiName, query) {
  console.log(`fetchAPIData ran: ${apiName} "${query}"`)
  const searchURL = APIInfo[apiName].URL
  const params = APIInfo[apiName].searchParams
  const queryString = formatQuery(params)
  const url = searchURL + '?' + queryString
  
  console.log(url)

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
        console.log(responseJson)
      }
      throw new Error(response.statusText)
    /* .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    }); */
    })
    // OLD METHOD FOR DISPLAYING RESULTS WHEN THERE'S ONLY ONE API... NOW, WE NEED TO POPULATE responseData {}
    /*.then(responseJson => displayResults(responseJson)) */
    .then(responseJson => responseData[apiName] = responseJson)
    
    // Store YouTube's response data in the allResponses object.
    //.then(responseJson => storeResponseData.youtubeAPI = responseJson)
    
    // MIGHT NOT NEED THIS SECTION
    /* .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    }); */
}
