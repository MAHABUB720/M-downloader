const axios = require('axios');
const cheerio = require('cheerio');

async function tikdown(videoUrl) {
    const headers = {
        'authority': 'savetik.co',
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9,bn-BD;q=0.8,bn;q=0.7',
        'content-type': 'application/x-www-form-urlencoded;',
        'cookie': '_gid=GA1.2.1769233154.1724059433; _ga_4ZEZMTBFLJ=GS1.1.1724059433.1.1.1724059741.0.0.0; _ga=GA1.2.176505455.1724059433; _gat_gtag_UA_88358110_1=1; __gads=ID=758737be96dec113:T=1724059433:RT=1724059741:S=ALNI_MZneVEQwhWRT1w4G4cwmRdhZ4Dftg; __gpi=UID=00000ec5018d4c81:T=1724059433:RT=1724059741:S=ALNI_Mal9k-nL4knXccM2ehqDbaZzO_yRA; __eoi=ID=b7cde5ca853436e7:T=1724059433:RT=1724059741:S=AA-AfjY8yR4NPZzZhYMl7Ql9x2ex; FCNEC=%5B%5B%22AKsRol-XmG0Lcqb4oBrxwzgfTIS57d87Gy0ykoOpwxc1PujDOVNeyrl_yxPF3NgrjGQD0n_AQErU_D6a8GrB7NLFrtoap6GnpLKL0NZ9ZM-xAvTTtctRu2WsIIuryGjTAjB0cEXIWP2_Dq7J80BtbQe1V7ZMKzrr1w%3D%3D%22%5D%5D',
        'origin': 'https://savetik.co',
        'referer': 'https://savetik.co/en2',
        'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
        'x-requested-with': 'XMLHttpRequest'
    };

    // Encode the video URL properly
    const dataString = `q=${encodeURIComponent(videoUrl)}&is_from_webapp=1&sender_device=mobile&sender_web_id=7404774559176721927&lang=en`;

    try {
        const response = await axios.post('https://savetik.co/api/ajaxSearch', dataString, { headers });
        
        if (response.status === 200) {
            const imran = response.data;
            const x = imran.data;

            if (!x) {
                throw new Error('No data found in response');
            }

            const $ = cheerio.load(x);
            const maindata = $(".tik-right .dl-action a").attr("href");

            if (!maindata) {
                throw new Error('Download link not found');
            }

            return { author: "Imran", data: maindata };
        } else {
            throw new Error(`Unexpected response code: ${response.status}`);
        }
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
}

module.exports = tikdown;
