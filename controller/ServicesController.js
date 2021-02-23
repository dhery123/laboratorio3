class ServicesController{
    constructor(){}
    index (req, res){
        res.status(200).json({ serverResponse: "Hola mundo "});
    }
    
}
export default ServicesController;