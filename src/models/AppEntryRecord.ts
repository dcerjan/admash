export enum Environment {
  Off = 'Off',
  Sandbox = 'Sandbox',
  Live = 'Live',
}

export type AppEntryRecord = {
  id: number,
  platform: string,
  name: string
  earnedAmount: number,
  delta: number,
  environment: Environment
}
