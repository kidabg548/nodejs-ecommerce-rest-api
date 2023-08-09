const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifytoken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();
const User = require("../models/user");

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PSS_sec
      ).toString();
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message || "An error occurred" });
  }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try 
{   await user.findByIdAndDelete(req.params.id)

     res.status(200).json("user deleted succefully");
}   catch(err){
    res.status(500).json(err);
}
});

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const query = req.query.new;
    const users = query ? await User.find().sort({_id:-1}).limit(1) : await User.find();
    res.status(200).json(users); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } }
      },
      {
        $project: { month: { $month: "$createdAt" } } 
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
