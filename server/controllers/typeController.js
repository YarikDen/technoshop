class TypeController {
    async create(req, res){
        res.json({message: "create"});
    };

    async getAll(req, res){
        res.json({message: "getAll"});
    };

};

module.exports = new TypeController();