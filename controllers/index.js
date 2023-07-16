const router = require("express").Router();

const commentRoutes = require("./api/commentRoutes");


const userRoutes = require("./api/userRoutes");
const postRoutes = require("./api/postRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api/comments", commentRoutes);
router.use("/api/users", userRoutes);
router.use("/api/posts", postRoutes);

module.exports = router;