# Image Metadata Extractor

A Node.js utility to extract metadata (EXIF, IPTC, XMP, etc.) from image files.

## Features

- Supports popular image formats (JPEG, PNG, TIFF, WebP, etc.)
- Extracts EXIF, IPTC, and XMP metadata
- Simple API for integration into other projects
- CLI tool for quick metadata inspection

## Installation

```bash
npm install image-metadata-extractor
```

## Usage

### Programmatic

```js
const { extractMetadata } = require("image-metadata-extractor");

extractMetadata("path/to/image.jpg")
  .then((metadata) => {
    console.log(metadata);
  })
  .catch((err) => {
    console.error(err);
  });
```

### CLI

```bash
npx image-metadata-extractor path/to/image.jpg
```

## API

### `extractMetadata(filePath: string): Promise<Object>`

Extracts metadata from the given image file.

## Supported Formats

- JPEG
- PNG
- TIFF
- WebP
- (More coming soon)

## License

MIT

## Contributing

Pull requests are welcome! Please open an issue first to discuss your ideas.
