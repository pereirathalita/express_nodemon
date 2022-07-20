module.exports = (req, res, next) => {
    const { pass } = res.query;

    if (!pass || pass !== "banana") {
        return res.json("errado");
    }

    next();
};