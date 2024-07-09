import express from 'express';
import client from 'prom-client';

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics();

export const httpRequestDurationMicroseconds = new client.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 5],
});

export const metricsMiddleware = (req: any, res: any, next: any) => {
  const end = httpRequestDurationMicroseconds.startTimer();
  res.on('finish', () => {
    end({
      method: req.method,
      route: req.route ? req.route.path : '',
      status_code: res.statusCode,
    });
  });
  next();
};

export const getMetrics = async (req: any, res: any) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
};
