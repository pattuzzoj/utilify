export default function isURIError(value: any): value is URIError {
  return value instanceof URIError;
}
