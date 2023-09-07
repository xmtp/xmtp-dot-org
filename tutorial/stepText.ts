// this is one of Fabri's wallets
const tutorialWallet = "0x93e2fc3e99dfb1238eb9e0ef2580efc5809c7204";

export const stepText = {
  0: `npm install @xmtp/xmtp-js`,
  1: `import { Wallet } from "ethers";\nimport { Client } from "@xmtp/xmtp-js";`,
  2: `const wallet = Wallet.createRandom(); \nconsole.log("Wallet:", wallet.address);`,
  3: `const xmtp = await Client.create(wallet, { env: "dev" });\nconsole.log('Client created!')`,
  4: `const WALLET_TO = "${tutorialWallet}"; \nconst isOnDevNetwork = await xmtp.canMessage(WALLET_TO); \nconsole.log("Can message:", isOnDevNetwork);`,
  5: `const conversation = await xmtp.conversations.newConversation(WALLET_TO); \nconst { topic, createdAt, peerAddress } = conversation;\nconsole.log("Conversation created:", { topic, createdAt, peerAddress });`,
  6: `const message = await conversation.send("hellooooo"); \nconst { id, senderAddress, sent, content } = message;\nconsole.log("Message sent:", { id, senderAddress, sent, content });`,
  7: `const messages = await conversation.messages();\nconst content = messages.map(({ id, senderAddress, sent, content }) => {\n  return {\n    id,\n    senderAddress,\n    sent,\n    content,\n  };\n});\nconsole.log("Messages:", content);`,
};
