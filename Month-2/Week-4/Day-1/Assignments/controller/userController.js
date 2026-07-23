const createUser = async (req, res) => {
    try {
        res.json({
            message: "User created"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createUser
};