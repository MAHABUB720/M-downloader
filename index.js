const cheerio = require('cheerio'),
  request = require('request'),
  ndown = require('nayan-media-downloader'),
  { alldown } = require('nayan-media-downloader')

function tikdown(url, callback) {
  const query = 'q=' + encodeURIComponent(url) + '&lang=en',
    options = {
      url: 'https://savetik.co/api/ajaxSearch',
      method: 'POST',
      headers: headers, // Assuming headers is defined elsewhere
      body: query,
    }
  
  request(options, function (error, response, body) {
    if (error) {
      return callback(error, null)
    }
    if (response.statusCode !== 200) {
      return callback(
        new Error('Unexpected status code: ' + response.statusCode),
        null
      )
    }
    try {
      const result = JSON.parse(body)
      if (typeof result.data !== 'string') {
        return callback(new Error('Data is not in expected format'), null)
      }
      const $ = cheerio.load(result.data),
        downloadLink = $('.tik-right .dl-action a').attr('href'),
        responseData = {
          author: 'Mahabub Rahman',
          contact: 'https://www.facebook.com/www.xnxx.com.140',
          data: downloadLink,
        }
      callback(null, responseData)
    } catch (error) {
      callback(error, null)
    }
  })
}

async function fndown(url) {
  try {
    const result = await ndown(url)
    return {
      author: 'Mahabub Rahman',
      contact: 'https://www.facebook.com/www.xnxx.com.140',
      data: result.data,
    }
  } catch (error) {
    throw new Error('Failed to fetch URL: ' + error.message)
  }
}

async function alldl(url) {
  if (!url) {
    throw new Error('URL is required')
  }
  try {
    const result = await alldown(url)
    return {
      Author: 'Mahabub Rahman',
      devfb: 'https://www.facebook.com/www.xnxx.com.140',
      devwp: 'wa.me/+8801312737981',
      data: result.data,
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = {
  tikdown: tikdown,
  fndown: fndown,
  alldl: alldl,
}
