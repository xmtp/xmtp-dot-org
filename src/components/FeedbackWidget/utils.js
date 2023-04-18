import { Wallet } from 'ethers'
import { Client } from '@xmtp/xmtp-js'

/**
 * Options when the user answers that the page was not helpful.
 */
export const options = [
  'Inaccurate information',
  "Couldn't find the information I need",
  'Too complicated',
  'Errors in code samples',
  'Broken link or typo',
  'Something else',
]

/**
 * Sends the feedback message in the correct shape to the appropriate wallet.
 */
export async function reportFeedback(helpful, reason, extraInfo) {
  const wallet = Wallet.createRandom()
  const client = await Client.create(wallet)
  await client.publishUserContact()
  const conversation = await client.conversations.newConversation(
    '0x1314704982c0ad49dBa5D1D01fd44933143A5c5E'
  )
  await conversation.send(
    JSON.stringify({
      page: window.location.pathname,
      helpful,
      reason,
      extraInfo,
    })
  )
}
