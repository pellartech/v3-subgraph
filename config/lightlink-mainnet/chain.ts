import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// LightLink Mainnet (Chain ID: 1891)
export const FACTORY_ADDRESS = '0xcb2436774C3e191c85056d248EF4260ce5f27A9D'

// WETH on LightLink
export const REFERENCE_TOKEN = '0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73'

// TODO: Set this to a WETH/USDC pool address once one exists with liquidity
export const STABLE_TOKEN_POOL = '0x0000000000000000000000000000000000000000'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('4')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// Tokens that should contribute to tracked volume and liquidity
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0xbcf8c1b03bbdda88d579330bdf236b58f8bb2cfd', // USDC
  '0x808d7c71ad2ba3fa531b068a2417c63106bc0949', // USDT
  '0x519d3443cacc61bd844546edaea48e5502021802', // LL (LightLink token)
]

// Stablecoins on LightLink
export const STABLE_COINS: string[] = [
  '0xbcf8c1b03bbdda88d579330bdf236b58f8bb2cfd', // USDC
  '0x808d7c71ad2ba3fa531b068a2417c63106bc0949', // USDT
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
