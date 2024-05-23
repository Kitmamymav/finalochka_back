function cors(req, res, next) {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) {
        res.header("Access-Control-Allow-Origin", origin);
        res.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT");          
    }
    next();
};

const allowedCors = [
    'https://pindie11.nomoredomainswork.ru',
    'http://pindie11.nomoredomainswork.ru',
    'https://pindie10.nomoredomainswork.ru',
    'http://pindie10.nomoredomainswork.ru',
    'http://localhost:3001'
    'http://localhost:3000'
];

module.exports = cors;
