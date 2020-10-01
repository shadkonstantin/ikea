"use strict";

import { useCatalog } from './catalog.js';
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';


generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();
useCatalog();