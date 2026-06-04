import chalk from 'chalk';

export function printBanner() {
  console.log('');
  console.log(chalk.yellow('╔══════════════════════════════════════════════╗'));
  console.log(chalk.yellow('║') + chalk.bold.green("      Africa's Blockchain Club              ") + chalk.yellow('║'));
  console.log(chalk.yellow('║') + chalk.cyan('         abc-scaffold  v1.0.0               ') + chalk.yellow('║'));
  console.log(chalk.yellow('╚══════════════════════════════════════════════╝'));
  console.log('');
}

export const step  = (msg) => console.log('\n' + chalk.bold.blue('▶ ' + msg));
export const success = (msg) => console.log(chalk.green('  ✔ ') + msg);
export const info  = (msg) => console.log(chalk.cyan('  → ') + msg);
export const warn  = (msg) => console.log(chalk.yellow('  ⚠ ') + msg);
export const error = (msg) => console.log(chalk.red('  ✖ ') + msg);
