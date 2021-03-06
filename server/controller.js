const links = []
let id = 0
const axios = require('axios')

module.exports = {
    kanye(req, res) {
        res.status(200).send('http://i63.tinypic.com/2j9y8p.png')
    },
    create(req, res) {
        const {week, day, link, status} = req.body;
        links.push({
            id: id,
            week: week,
            day: day,
            link: link,
            status: status
        })
        id++
        res.status(200).json(links)
    },
    read(req, res){
        res.status(200).json(links)
    },
    update(req,res){
        const {status} = req.body;
        const {id} = req.params;
        for (let i=0;i<links.length;i++){
            if (links[i].id === +id){
                links[i].status = status;
            }
        }
        res.status(200).json(links)
    },
    delete(req,res){
        const {id} = req.params;
        links.forEach((element, index, array)=> {
            if (element.id === +id){
                array.splice(index,1)
            }
        })
        res.status(200).json(links)
    }, 
    search(req,res){
        const {link} = req.query;
        const search = links.filter(element => {
            return element.link.includes(link)
        })
        res.status(200).json(search)
    }
}