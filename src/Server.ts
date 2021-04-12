import { Express } from "express";
import * as http from "http";

const startServer = (app: Express) => {
  const PORT = process.env.PORT || 8000;
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`>> Server running on http://localhost:${PORT} ...`);
  });
};

export default startServer;