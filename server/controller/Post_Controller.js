const postgres = require("../postgres");
const iniparser = require("iniparser");

const getPost = async (req, res) => {
  try {
    console.log("getPOST");

    let sql = `select * from public.post`;
    let list = await postgres(sql);

    // console.log(list, "list");

    return res.json({ list });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const Post_Controller = {
  getPost,
};

module.exports = Post_Controller;
