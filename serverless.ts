import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'apollo-serverless',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
  },
  functions: {
    hello: {
      handler: 'handler.hello',
      events: [
        {
          http: {
            method: 'get',
            path: 'hello',
          }
        }
      ]
    },
    graphql: {
      handler: 'graphql.graphqlHandler',
      events: [
        {
          http: {
            method: 'post',
            path: 'graphql',
            cors: true,
          },
        },
        {
          http: {
            method: 'get',
            path: 'graphql',
            cors: true,
          },
        },
      ],
    }
  }
}

module.exports = serverlessConfiguration;
