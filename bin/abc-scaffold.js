#!/usr/bin/env node

import { scaffold } from '../src/scaffold.js';
import { printBanner } from '../src/logger.js';

const arg = process.argv[2];

if (arg === '--help' || arg === '-h') {
  printBanner();
  console.log('  Usage:  npx abc-scaffold [project-name]\n');
  console.log('  Scaffolds a Hardhat + React blockchain project.\n');
  console.log('  If project-name is omitted you will be prompted.\n');
  process.exit(0);
}

printBanner();
scaffold(arg);
