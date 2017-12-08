const links = []

module.exports = {
    test(req, res) {
        res.status(200).send('http://i63.tinypic.com/2j9y8p.png')
    },
    post(req, res) {
        links.push(req.body)
        res.status(200).send('OK')
    },
    read(req, res){
        const {week, day} = req.body;
        // if(week === 1){
        //     res.json(links)
        // }
        res.status(200).json(links)
    },


}