const cheerio = require('cheerio'),
  request = require('request'),
  ndown = require('nayan-media-downloader'),
  { alldown } = require('nayan-media-downloader')
function tikdown(_0x9a5331, _0x23c479) {
  const _0x1383fe = 'q=' + encodeURIComponent(_0x9a5331) + '&lang=en',
    _0x102caf = {
      url: 'https://savetik.co/api/ajaxSearch',
      method: 'POST',
      headers: _0x56299b,
      body: _0x1383fe,
    }
  request(_0x102caf, function (_0x37a267, _0x4bb304, _0x2bcd52) {
    if (_0x37a267) {
      return _0x23c479(_0x37a267, null)
    }
    if (_0x4bb304.statusCode !== 200) {
      return _0x23c479(
        new Error('Unexpected status code: ' + _0x4bb304.statusCode),
        null
      )
    }
    try {
      const _0x30a856 = JSON.parse(_0x2bcd52)
      if (typeof _0x30a856.data !== 'string') {
        return _0x23c479(new Error('Data is not in expected format'), null)
      }
      const _0x4fbf67 = cheerio.load(_0x30a856.data),
        _0x1bd3f5 = _0x4fbf67('.tik-right .dl-action a').attr('href'),
        _0x22971f = {
          author: 'Mahabub Rahman',
          contact: 'https://www.facebook.com/www.xnxx.com.140',
          data: _0x1bd3f5,
        }
      _0x23c479(null, _0x22971f)
    } catch (_0x46d4e4) {
      _0x23c479(_0x46d4e4, null)
    }
  })
}
async function fndown(_0x3abe1c) {
  try {
    const _0xbeebe5 = await ndown(_0x3abe1c)
    return {
      author: 'Mahabub Rahman',
      contact: 'https://www.facebook.com/www.xnxx.com.140',
      data: _0xbeebe5.data,
    }
  } catch (_0x250ff3) {
    throw new Error('Failed to fetch URL: ' + _0x250ff3.message)
  }
}
async function alldl(_0x46dd9d) {
  if (!_0x46dd9d) {
    throw new Error('URL is required')
  }
  try {
    const _0xeba052 = await alldown(_0x46dd9d)
    return {
      Author: 'Mahabub Rahman',
      devfb: 'https://www.facebook.com/www.xnxx.com.140',
      devwp: 'wa.me/+8801312737981',
      data: _0xeba052.data,
    }
  } catch (_0x246da9) {
    throw new Error(_0x246da9.message)
  }
}
module.exports = {
  tikdown: tikdown,
  fndown: fndown,
  alldl: alldl,
}
