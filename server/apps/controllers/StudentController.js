const StudentModels = require("../../../models/StudentModels");

const StudentController = {
  async create(req, res) {
    const body = req.body;
    res.send({ message: "Sucesss!new record created", reqBody: body });
  },
  async readAll(req, res) {
    const Student= await StudentModels.find()
    res.send({
      message: "success!student details",
    });
  },
  readOne(req, res) {
    const params = req.params;
    res.send({
      message: "success!student details found",
      q: params,
    });
  },
  update(req, res) {
    res.send({
      message: "success!record updated",
    });
  },
  destroy(req, res) {
    res.send({
      message: "success!deleted successfully",
    });
  },
};
module.exports = StudentController;
