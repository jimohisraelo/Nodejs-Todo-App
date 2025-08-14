const app = require("./app");
const PORT = process.env.PORT || 4444;

// listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});