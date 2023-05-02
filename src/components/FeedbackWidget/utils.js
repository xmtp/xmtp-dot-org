import { Wallet } from 'ethers'
import { Client } from '@xmtp/xmtp-js'

/**
 * Options when the user answers that the page was not helpful.
 */
export const options = [
  'Inaccurate info',
  "Couldn't find what I need",
  'Too complicated',
  'Errors in code sample',
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
    '0x1852b55b3D59006Db4aAF4f9768b5c38def19156'
  )
  await conversation.send(
    JSON.stringify({
      page: window.location.pathname,
      helpful,
      reason,
      extraInfo,
      date: new Date().toLocaleDateString(),
    })
  )
}
