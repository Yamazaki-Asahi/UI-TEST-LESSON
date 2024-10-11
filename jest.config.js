/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'jest-environment-jsdom',
  // 以下にtsconfig.app.jsonの設定を追加する
  transform: {
    '^.+.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};