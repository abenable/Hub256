import {
  createLogger,
  format as _format,
  transports as _transports,
} from 'winston';

const logger = createLogger({
  level: 'silly',
  format: _format.json(),
  transports: [
    new _transports.File({ filename: 'error.log', level: 'error' }),
    new _transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new _transports.Console({
      format: _format.combine(
        _format.colorize(), // This will colorize the output based on the log level
        _format.simple()
      ),
    })
  );
}

export default logger;
