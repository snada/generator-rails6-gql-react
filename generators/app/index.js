var Generator = require('yeoman-generator');
const yosay = require('yosay');

const Case = require('case');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        'Welcome to the stupendous ' + chalk.red('Rails6/GQL/React') + ' generator!'
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname // Default to current folder name
      },
      {
        type: 'input',
        name: 'rubyVersion',
        message: 'Preferred ruby version:',
        default: '2.7.2'
      },
      {
        type: 'input',
        name: 'nodeVersion',
        message: 'Preferred node version:',
        default: '14.15.0'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const appName = Case.snake(this.props.name);
    const appCapitalName = Case.capital(this.props.name);
    const appConstant = Case.constant(this.props.name);
    const appClassName = Case.pascal(this.props.name);

    const subs = {
      appName,
      appCapitalName,
      appConstant,
      appClassName,
      rubyVersion: this.props.rubyVersion,
      nodeVersion: this.props.nodeVersion
    };

    if (this.appname !== this.props.name) {
      this.destinationRoot(appName);
    }

    [
      'app/assets/config',
      'app/assets/stylesheets',
      'app/channels',
      'app/controllers',
      'app/graphql/input_types',
      'app/graphql/mutations',
      'app/graphql/types',
      'app/helpers',
      'app/javascript',
      'app/jobs',
      'app/mailers',
      'app/models',
      'app/views',
      'bin',
      'config',
      'db',
      'public',
      'spec',
      'babel.config.js',
      'config.ru',
      'Gemfile',
      'package.json',
      'postcss.config.js',
      'Rakefile',
      'README.md'
    ].forEach((name) =>
      this.fs.copyTpl(
        this.templatePath(name),
        this.destinationPath(name),
        subs
      )
    );

    this.fs.copyTpl(
      this.templatePath('app/graphql/test_app_schema.rb',),
      this.destinationPath(`app/graphql/${appName}_schema.rb`),
      subs
    );

    ['lib/assets', 'lib/tasks', 'log', 'storage', 'tmp', 'vendor', 'app/assets/images'].forEach((name) =>
      this.fs.copyTpl(
        this.templatePath(`${name}/_keep`),
        this.destinationPath(`${name}/.keep`),
        subs
      )
    );

    ['browserslistrc', 'gitignore', 'nvmrc', 'rspec', 'ruby-version'].forEach((name) =>
      this.fs.copyTpl(
        this.templatePath(`_${name}`),
        this.destinationPath(`.${name}`),
        subs
      )
    );
  }

  install() {
    this.log(
      yosay(
        'Done! Run \n' + chalk.green('bundle install') + '\n and ' + chalk.green('yarn install') + '\n to install dependencies!'
      )
    );
  }
};
