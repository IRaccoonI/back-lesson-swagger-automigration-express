import { Request, Response, NextFunction } from "express";
import dedent from "dedent";

export function logger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const logMessage = dedent`
        [${new Date().toISOString()}] ${req.method} ${req.originalUrl}
        Status: ${res.statusCode}
        Duration: ${duration}ms
        `;

    console.log(logMessage);
  });

  next();
}
