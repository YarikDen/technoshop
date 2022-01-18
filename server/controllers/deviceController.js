class DeviceController {
    async create(req, res){
        res.json({message: "create"});
    };

    async getAll(req, res){
        res.json({message: "getAll"});
    };

    async getOne(req, res){
        
        res.json({message: "getOne"});
    };

};

module.exports = new DeviceController();