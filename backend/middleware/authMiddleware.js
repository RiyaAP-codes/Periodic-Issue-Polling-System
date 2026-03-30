const jwt = require("jsonwebtoken");

// verify token
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({
                message: "No token, access denied"
            });
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;

        next();

    } catch (error) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};

// role check
exports.checkRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: "Access denied: insufficient role"
            });
        }
        next();
    };
};