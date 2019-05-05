/* eslint-disable dot-notation */
import {isBrowser, global} from './utils/globals';

import {TextDecoder, TextEncoder} from './text-encoding/encoding';

import fetchNode from './fetch-node/fetch.node';

import {encodeImageNode} from './images-node/encode-image.node';
import {parseImageNode} from './images-node/parse-image.node';

// POLYFILLS: TextEncoder, TextDecoder
// - Node: v11 introduces these classes, for lower versions we use these polyfills
// - Browser: Edge, IE11 do not have these

if (!('TextEncoder' in global) && TextEncoder) {
  global['TextEncoder'] = TextEncoder;
}
if (!('TextDecoder' in global) && TextDecoder) {
  global['TextDecoder'] = TextDecoder;
}

// POLYFILL: fetch
// - Node: Yes
// - Browser: No. For This polyfill is node only, IE11 etc, install external polyfill

if (!isBrowser && !('fetch' in global) && fetchNode) {
  global['fetch'] = fetchNode;
}

// NODE IMAGE FUNCTIONS:
// These are not official polyfills but used by the @loaders.gl/images module if installed
// TODO - is there an appropriate Image API we could polyfill using an adapter?

if (!isBrowser && !('_encodeImageNode' in global) && encodeImageNode) {
  global['_encodeImageNode'] = encodeImageNode;
}

if (!isBrowser && !('_parseImageNode' in global) && parseImageNode) {
  global['_parseImageNode'] = parseImageNode;
}
