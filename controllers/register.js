

const handleRegister = (req, res, database) => {
    const { question1 } = req.body;
        database.question1 = question1;
}


module.exports = {
    handleRegister: handleRegister
};