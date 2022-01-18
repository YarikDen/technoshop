class UserController {
    async registration(req, res){
        res.json({message: "registration"});
    };

    async login(req, res){
        res.json({message: "login"});
    };

    async authentification(req, res){
        res.json({message: "authentification"});
    };
};

module.exports = new UserController();
