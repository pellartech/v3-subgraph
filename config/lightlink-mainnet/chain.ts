import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// LightLink Mainnet (Chain ID: 1891)
export const FACTORY_ADDRESS = '0xcb2436774C3e191c85056d248EF4260ce5f27A9D'

// WETH on LightLink
export const REFERENCE_TOKEN = '0x7ebef2a4b1b09381ec5b9df8c5c6f2dbeca59c73'

// WETH/USDC 0.3% pool for price reference
export const STABLE_TOKEN_POOL = '0x1125452469e9b9a36fe69249309fce8925c3eeda'

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
  '0xbcf8c1b03bbdda88d579330bdf236b58f8bb2cfd', // USDCe (Stargate bridged)
  '0x18fb38404dadee1727be4b805c5b242b5413fa40', // USDC
  '0x808d7c71ad2ba3fa531b068a2417c63106bc0949', // USDT
  '0x519d3443cacc61bd844546edaea48e5502021802', // LL (LightLink token)
]

// Stablecoins on LightLink
export const STABLE_COINS: string[] = [
  '0xbcf8c1b03bbdda88d579330bdf236b58f8bb2cfd', // USDCe (Stargate bridged)
  '0x18fb38404dadee1727be4b805c5b242b5413fa40', // USDC
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
