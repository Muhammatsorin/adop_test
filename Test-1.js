const axios = require('axios')
const cheerio = require('cheerio')

async function getTopics() {

    try {
        
        const { data } = await axios.get("https://pantip.com/topic/42747344")

        const parser = cheerio.load(data)

        const container = parser("div.container-inner")
        const items = parser(container).find("div.display-post-tag-wrapper a").map((idx , element) => {
            return parser(element).text()
        }).toArray()

        console.log(items)

    } catch (err) {
        console.log("Error fetching topic data: " , err)
    }
}

getTopics()