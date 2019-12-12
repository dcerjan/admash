export type StatRecord = {
  id: number,
  icon: string
  name: string
  symbolFix: 'prefix' | 'postfix'
  symbol: string
  value: number
  delta: number
  sign: -1 | 0 | 1
}