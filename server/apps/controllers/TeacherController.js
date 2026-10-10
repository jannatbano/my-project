const TeacherController={
    create(req, res) {
    const body = req.body;
    res.send({ message: "Sucesss!new record created", reqBody: body });
  },
    readAll(req,res){
        res.send({
      message: "success! Teacher details",
    });
    },
    readOne(req,res){
        const params = req.params;
    res.send({
      message: "success!Teacher details found",
      q: params,
    });
    },
    update(req,res){
        res.send({
      message: "success!record updated",
    });
    },
    destroy(req,res){
        res.send({
      message: "success!deleted successfully",
    });
    },

}
module.exports = TeacherController