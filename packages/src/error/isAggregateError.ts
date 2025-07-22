export default function isAggregateError(value: any): value is AggregateError {
  return typeof AggregateError !== 'undefined' && value instanceof AggregateError;
}