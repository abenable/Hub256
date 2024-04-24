import {
  createLogger,
  format as _format,
  transports as _transports,
} from 'winston';
import winstonTimestampColorize from 'winston-timestamp-colorize';
import moment from 'moment';

const { combine, timestamp, colorize, printf, splat } = _format;

const logger = createLogger({
  format: combine(
    splat(),
    timestamp({
      format: () => moment.utc().format('YYYY-MM-DD HH:mm:ss') + ' UTC',
    }),
    colorize(),
    winstonTimestampColorize({ color: 'cyan' }),
    printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'debug',
  transports: [new _transports.Console({})],
});

export default logger;
