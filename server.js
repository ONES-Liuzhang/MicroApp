const express = require("express")
const http = require("http")
const history = require("connect-history-api-fallback")
const minimist = require("minimist")
const cors = require("cors")

let port = 3000;

try {
  const args = minimist(process.argv.splice(2))
  port = args['p']
} catch (err) {
  console.log(err);
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(history({
  index: "/index.html",
  rewrites: {
    from: /\/*/,
    to: "/index.html"
  }
}));
app.use(express.static('./dist'));

const server = http.createServer(app);

server.listen(port, () => {
  console.log("server now listening on ", port);
});

server.on("error", (err) => {
  server.close();
  if(err.code === 'EADDRINUSE') {
    console.log(`端口${port}被占用`)
  }
})