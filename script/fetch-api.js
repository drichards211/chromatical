'use strict'

/* Stores API keys, URL endpoints, and search parameters: */
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
      exsectionformat: 'plain',
      piprop: 'name|thumbnail|original',
      pithumbsize: 270,  
    }
  },
  youtube: {
    URL: "https://www.googleapis.com/youtube/v3/search",
    searchParams: {
      key: "AIzaSyAZ7f_TuBgtdcgXIhd2HouvK2Qu_jMpGX4",
      q: "This value is replaced by handleFormInput()",
      part: 'snippet',
      maxResults: '20',
      safeSearch: 'strict',
      type: 'video',
      videoEmbeddable: 'true',
      videoSyndicated: 'true', /* Restrict search to videos that can be played outside youtube.com */
     },
  },
  itunes: {
    URL: "https://itunes.apple.com/search",
    searchParams: {
      term: "This value is replaced by handleFormInput()",
      limit: "25",
      media: "music",
      
    },
  },
  google: {
    URL: "https://www.googleapis.com/customsearch/v1",
    searchParams: {
      key: "AIzaSyD3DcquX1CFW6pB6bmQrTcZ3O_WEWYtK5I", 
      cx: '000457940223891916115:2oiuyyxlube',
      q: "This value is replaced by handleFormInput()",
      searchType: "image",
      num: "10",
      start: 1,
      /* queries: "nextPage" */
      /* startIndex: "11", */
    },
  },
  spotify: {
    URL: "https://api.spotify.com/v1/search",
    searchParams: {
      H: "Authorization: Bearer 06667ace485843e2a90ef45a0c5851eb",
      q: "This value is replaced by handleFormInput()",
      type: "album, artist, playlist, track",
      limit: "20",
    },
  },
}

/* Stores API response data in separate keys: */
let responseData = {}

function formatQuery(params) {
  console.log("formatQuery() ran")
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&')
}

function fetchAPIData(apiName, query) {
  console.log(`fetchAPIData ran: ${apiName} "${query}"`)
  let searchURL = APIInfo[apiName].URL
  let params = APIInfo[apiName].searchParams
  let queryString = formatQuery(params)
  let url = searchURL + '?' + queryString
  console.log(url)

  /* fetch call to wikipedia API*/
  if (apiName === "wikipedia") {
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      /* If response fails, reformat the search-string and try again */
      .then(responseJson => {
        if (responseJson.query.pageids[0] !== "-1") {
          console.log("First wikipedia query was successful")
          responseData[apiName] = responseJson
        } else if (responseJson.query.pageids[0] === "-1") {
          /* Replace any letter character that is next to a word boundary (such as a space) with upper case */
          APIInfo.wikipedia.searchParams.titles = userFormInput.replace(/\b\w/g, function(l) { return l.toUpperCase() })
          console.log(`Attempting revised wikipedia search: "${APIInfo.wikipedia.searchParams.titles}"`)
          /* Refresh queryString and searchURL */
          queryString = formatQuery(params)
          url = searchURL + '?' + queryString
          console.log(url)
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json()
              } else {
                throw new Error(response.statusText)
              }
            })
            /* If response fails, reformat the search-string and try again */
            .then(responseJson => {
              responseData[apiName] = responseJson
              if (responseJson.query.pageids[0] !== "-1") {
                console.log("Revised wikipedia search was successful")
                responseData[apiName] = responseJson
              } else if (responseJson.query.pageids[0] === "-1") {
                /* Replace all lowercase letters with uppercase */ 
                APIInfo.wikipedia.searchParams.titles = userFormInput.toUpperCase()
                console.log(`Attempting revised wikipedia search: "${APIInfo.wikipedia.searchParams.titles}"`)
                /* Refresh queryString and searchURL */
                queryString = formatQuery(params)
                url = searchURL + '?' + queryString
                console.log(url)
                fetch(url)
                  .then(response => {
                    if (response.ok) {
                      return response.json()
                    } else {
                      throw new Error(response.statusText)
                    }
                  })
                  .then(responseJson => {
                    if (responseJson.query.pageids[0] !== "-1") {
                      console.log("2nd revised wikipedia search was successful")
                      responseData[apiName] = responseJson
                    }
                  })
                }
            })
        }
      })
  } 
  /* fetch call to other APIs */    
  if (apiName !== "wikipedia" /* && apiName !== "google" */) {
    fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error(response.statusText)
          }
        })
        .then(responseJson => responseData[apiName] = responseJson)
        .catch(err => {
          console.log(`${apiName} API failed to fetch`)
        })
  }
}
