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
      count: "10",
      startIndex: "11",
      /* maxResults: '20', */
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
let responseData = {
  wikipedia: {},
  youtube: {},
  itunes: {},
  google: {}, /* "kind":"customsearch#search","url":{"type":"application/json","template":"https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"},"queries":{"request":[{"title":"Google Custom Search - bjork","totalResults":"118000000","searchTerms":"bjork","count":10,"startIndex":1,"inputEncoding":"utf8","outputEncoding":"utf8","safe":"off","cx":"000457940223891916115:vv6akwfhiiy","searchType":"image"}],"nextPage":[{"title":"Google Custom Search - bjork","totalResults":"118000000","searchTerms":"bjork","count":10,"startIndex":11,"inputEncoding":"utf8","outputEncoding":"utf8","safe":"off","cx":"000457940223891916115:vv6akwfhiiy","searchType":"image"}]},"context":{"title":"Entire Web Image Search"},"searchInformation":{"searchTime":0.637915,"formattedSearchTime":"0.64","totalResults":"118000000","formattedTotalResults":"118,000,000"},"items":[{"kind":"customsearch#result","title":"björk (@bjork) | Twitter","htmlTitle":"<b>björk</b> (@<b>bjork</b>) | Twitter","link":"https://pbs.twimg.com/profile_images/925346722087342080/HPCZu3m4_400x400.jpg","displayLink":"twitter.com","snippet":"björk (@bjork) | Twitter","htmlSnippet":"<b>björk</b> (@<b>bjork</b>) | Twitter","mime":"image/jpeg","image":{"contextLink":"https://twitter.com/bjork","height":400,"width":400,"byteSize":37389,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSucQvGRc5TDhptTCJbOw4jWGb2p2DEr7VMiK7ThReIH_ZCxzZ0IyJquA","thumbnailHeight":124,"thumbnailWidth":124}},{"kind":"customsearch#result","title":"5 interesting facts about Björk | Red Bull Music","htmlTitle":"5 interesting facts about <b>Björk</b> | Red Bull Music","link":"https://image.redbull.com/rbcom/010/2016-09-12/1331817316287_2/0100/0/1/bj%C3%B6rk-portrait-taken-in-tokyo-in-2016.jpg","displayLink":"www.redbull.com","snippet":"5 interesting facts about Björk | Red Bull Music","htmlSnippet":"5 interesting facts about <b>Björk</b> | Red Bull Music","mime":"image/jpeg","image":{"contextLink":"https://www.redbull.com/gb-en/5-things-we-didn-t-know-about-bjork","height":2000,"width":3000,"byteSize":367837,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTBmFyLqzntZuIGT775Hl2941LAip6qmI17lT_XeFmhQzucnGg1-SK_w","thumbnailHeight":100,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Oh so quietly, Björk joins the bitcoin revolution | News | The Times","htmlTitle":"Oh so quietly, <b>Björk</b> joins the bitcoin revolution | News | The Times","link":"https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa177fbce-bfe6-11e7-b58a-4186f6049f2e.jpg?crop=1901%2C1069%2C53%2C450&resize=685","displayLink":"www.thetimes.co.uk","snippet":"Oh so quietly, Björk joins the bitcoin revolution | News | The Times","htmlSnippet":"Oh so quietly, <b>Björk</b> joins the bitcoin revolution | News | The Times","mime":"image/jpeg","image":{"contextLink":"https://www.thetimes.co.uk/article/oh-so-quietly-bjork-joins-the-bitcoin-revolution-36wnlbvkb","height":385,"width":685,"byteSize":40976,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMGzHGnFLVBCFkboe0EAanNe0zVui0lERsTrcumKY2tu-X0aRUQ0Ow_A","thumbnailHeight":78,"thumbnailWidth":139}},{"kind":"customsearch#result","title":"Swan dress - Wikipedia","htmlTitle":"Swan dress - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Bj%C3%B6rk_and_the_Swan_Dress.jpg/220px-Bj%C3%B6rk_and_the_Swan_Dress.jpg","displayLink":"en.wikipedia.org","snippet":"Swan dress - Wikipedia","htmlSnippet":"Swan dress - Wikipedia","mime":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Swan_dress","height":230,"width":220,"byteSize":13445,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rE_xYWfSnDUTPqKzoojuh6m0eGsaOQIw_06OvyP5wRftoeu5m-sKp8A","thumbnailHeight":108,"thumbnailWidth":103}},{"kind":"customsearch#result","title":"Bjork At 50 – The Iconic Artist's Life And Career In Pictures - NME","htmlTitle":"<b>Bjork</b> At 50 – The Iconic Artist&#39;s Life And Career In Pictures - NME","link":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/11/2015_Bjork_Youtube_191115-920x609.jpg","displayLink":"www.nme.com","snippet":"Bjork At 50 – The Iconic Artist's Life And Career In Pictures - NME","htmlSnippet":"<b>Bjork</b> At 50 – The Iconic Artist&#39;s Life And Career In Pictures - NME","mime":"image/jpeg","image":{"contextLink":"https://www.nme.com/photos/bjork-at-50-the-iconic-artist-s-life-and-career-in-pictures-1420130","height":609,"width":920,"byteSize":42713,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7SsTDZjyrDQMWeh8c85JGIuVZ-ea_FHqxMr3dL4WKua9i8uFZ4xWtqY7","thumbnailHeight":97,"thumbnailWidth":147}},{"kind":"customsearch#result","title":"Björk on creativity as an ongoing experiment – The Creative ...","htmlTitle":"<b>Björk</b> on creativity as an ongoing experiment – The Creative ...","link":"https://s3.amazonaws.com/tci-assets/uploads/bjo1%202017_FINAL_V_preview.jpg","displayLink":"thecreativeindependent.com","snippet":"Björk on creativity as an ongoing experiment – The Creative ...","htmlSnippet":"<b>Björk</b> on creativity as an ongoing experiment – The Creative ...","mime":"image/jpeg","image":{"contextLink":"https://thecreativeindependent.com/people/bjork-on-creativity-as-an-ongoing-experiment/","height":2560,"width":1920,"byteSize":646693,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87owxN9a2KXdaNiQQVpUyoAEcaJed3K8aeENRrLXRIW9ki8xSFbRdLpI","thumbnailHeight":150,"thumbnailWidth":113}},{"kind":"customsearch#result","title":"The Utopian: Björk On Loss, Moving On, Activism & Seeking Change ...","htmlTitle":"The Utopian: <b>Björk</b> On Loss, Moving On, Activism &amp; Seeking Change ...","link":"https://i2.wp.com/grapevine.is/wp-content/uploads/Bjork_by_Santiago_Felipe-Web-Crop.jpg?fit=1855%2C1704&quality=85&ssl=1","displayLink":"grapevine.is","snippet":"The Utopian: Björk On Loss, Moving On, Activism & Seeking Change ...","htmlSnippet":"The Utopian: <b>Björk</b> On Loss, Moving On, Activism &amp; Seeking Change ...","mime":"image/jpeg","image":{"contextLink":"https://grapevine.is/culture/music/2017/12/07/the-utopian-bjork-on-loss-moving-on-activism-seeking-change/","height":1704,"width":1855,"byteSize":444212,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkUFlX_RWjq6PFc83V3pGxpW7dtS3W9x4Bhwe3_t4QFUi4tatLp-lzZT-","thumbnailHeight":138,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Björk – Telekom Electronic Beats","htmlTitle":"<b>Björk</b> – Telekom Electronic Beats","link":"http://www.electronicbeats.net/app/uploads/2015/03/Bjork_EB.jpg","displayLink":"www.electronicbeats.net","snippet":"Björk – Telekom Electronic Beats","htmlSnippet":"<b>Björk</b> – Telekom Electronic Beats","mime":"image/jpeg","image":{"contextLink":"http://www.electronicbeats.net/artist/bjork/","height":1000,"width":1600,"byteSize":112043,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFksmqD-iGhIvveIfzvqphXyMxCMMvKN9NS3NIGePgSqR__1gxVdTDRdG1","thumbnailHeight":94,"thumbnailWidth":150}},{"kind":"customsearch#result","title":"Björk - Home | Facebook","htmlTitle":"<b>Björk</b> - Home | Facebook","link":"https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=6747251459","displayLink":"www.facebook.com","snippet":"Björk - Home | Facebook","htmlSnippet":"<b>Björk</b> - Home | Facebook","mime":"image/","image":{"contextLink":"https://www.facebook.com/bjork/","height":960,"width":960,"byteSize":147219,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91SFwH4DglkZqxcdyMRw8NkouWEjKpf7vJ3z-F25bC3q54lIvNl7M9EVH","thumbnailHeight":148,"thumbnailWidth":148}},{"kind":"customsearch#result","title":"Björk - Wikipedia","htmlTitle":"<b>Björk</b> - Wikipedia","link":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bj%C3%B6rk_by_deep_schismic_at_Big_Day_Out_2008%2C_Melbourne_Flemington_Racecourse.jpg/220px-Bj%C3%B6rk_by_deep_schismic_at_Big_Day_Out_2008%2C_Melbourne_Flemington_Racecourse.jpg","displayLink":"en.wikipedia.org","snippet":"Björk - Wikipedia","htmlSnippet":"<b>Björk</b> - Wikipedia","mime":"image/jpeg","image":{"contextLink":"https://en.wikipedia.org/wiki/Bj%C3%B6rk","height":310,"width":220,"byteSize":22292,"thumbnailLink":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DWVdJrbwTcpVuBc9--IEsxfvhL7un8_zH2DJpozFqi_IUCBjxDSDcw","thumbnailHeight":117,"thumbnailWidth":83}}]}, */
  spotify: {},
  tastedive: {},
  ticketmaster: {},
}

function formatQuery(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&')
}

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
      } else {
        throw new Error(response.statusText)
      }
    })
    .then(responseJson => responseData[apiName] = responseJson)
    .catch(err => {
      console.log(`${apiName} API failed to fetch`)
    })
}
