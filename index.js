const { alldl } = require('rahad-all-downloader');

async function dl(url) {
    try {
        const response = await alldl(url);
        return response;
    } catch (error) {
        console.error('Error in downloading:', error.message);
        return { error: 'Download failed' };
    }
}


module.exports = {
    dl
}
