export default function isFileExtension(fileName: string, extensions: string): boolean;
export default function isFileExtension(fileName: string, extensions: string[]): boolean;
export default function isFileExtension(fileName: string, extensions: any): boolean {
  if (typeof fileName !== 'string') {
    throw new TypeError(`Expected a string for 'fileName'`);
  }

  if (typeof extensions !== 'string' && !Array.isArray(extensions)) {
    throw new TypeError(`Expected a string or array for 'extensions'`);
  }

  if (fileName.trim() === '') {
    return false;
  }

  const fileExtension = fileName.trim().split('.').pop()?.toLowerCase();
  
  if (!fileExtension) {
    return false;
  }

  if (Array.isArray(extensions)) {
    return extensions.some(ext => fileExtension === ext.toLowerCase().replace(/^\./, ''));
  } else if (typeof extensions === 'string') {
    return fileExtension === extensions.toLowerCase().replace(/^\./, '');
  }

  return false;
}