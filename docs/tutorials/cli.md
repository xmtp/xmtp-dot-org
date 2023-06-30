---
sidebar_label: CLI Starter
sidebar_position: 6
---

# Build an XMTP CLI tool

Use this starter project to build an XMTP CLI tool. You can also check out the [GitHub repo](https://github.com/xmtp/cli-starter)

### Prerequisites

- Node.js version >16.7

### Installation

1. Run `npm i` in this folder
2. Run `npm run watch` in your terminal, and leave it running as you complete this exercise
3. Ensure that installation succeeded by running `./xmtp --help` in another terminal window
4. Initialize with a random wallet by running `./xmtp init`

### Tools we will be using

- [xmtp-js](https://github.com/xmtp/xmtp-js) for interacting with the XMTP network
- [yargs](https://www.npmjs.com/package/yargs) for command line parsing
- [ink](https://www.npmjs.com/package/ink) for rendering the CLI using React components

## Challenges

### Send a message to an address

In `src/index.ts`, you will see a command already defined:

```ts
  .command(
    'send <address> <message>',
    'Send a message to a blockchain address',
    {
      address: { type: 'string', demand: true },
      message: { type: 'string', demand: true }
    },
    async (argv: any) => {
      throw new Error('BUILD ME')
    }
  )
```

We want the user to be able to send the contents of the `message` argument to the specified `address`.

To start, you'll need to create an instance of the XMTP SDK using the provided `loadWallet()` helper.

```ts
const { env, message, address } = argv;
const client = await Client.create(loadWallet(), { env });
```

To send a message, you'll need to create a conversation instance and then send that message to the conversation.

```ts
const conversation = await client.conversations.newConversation(address);
const sent = await conversation.send(message);
```

So, putting it all together, the command will look like this:

```ts
  .command(
    'send <address> <message>',
    'Send a message to a blockchain address',
    {
      address: { type: 'string', demand: true },
      message: { type: 'string', demand: true },
    },
    async (argv: any) => {
      const { env, message, address } = argv
      const client = await Client.create(loadWallet(), { env })
      const conversation = await client.conversations.newConversation(address)
      const sent = await conversation.send(message)
      // Use the Ink renderer provided in the example
      render(<Message {...sent} />)
    }
  )
```

#### Verify it works

```bash
./xmtp send 0xF8cd371Ae43e1A6a9bafBB4FD48707607D24aE43 "Hello world"
```

### List all messages from an address

The next command we are going to implement is `list-messages`. The starter looks like this:

```ts
.command(
    'list-messages <address>',
    'List all messages from an address',
    { address: { type: 'string', demand: true } },
    async (argv) => {
      throw new Error('BUILD ME!')
    }
  )
```

Load the Client the same as before, and then load the conversation with the supplied address:

```ts
const client = await Client.create(loadWallet(), { env });
const convo = await client.conversations.newConversation(address);
```

Get all the messages in the conversation with:

```ts
const messages = await convo.messages();
```

You can then render them prettily with the supplied renderer component:

```ts
const title = `Messages between ${truncateEthAddress(
  client.address,
)} and ${truncateEthAddress(convo.peerAddress)}`;
render(<MessageList title={title} messages={messages} />);
```

The completed command will look like this:

```ts
.command(
    'list-messages <address>',
    'List all messages from an address',
    { address: { type: 'string', demand: true } },
    async (argv: any) => {
        const { env, address } = argv
        const client = await Client.create(loadWallet(), { env })
        const conversation = await client.conversations.newConversation(address)
        const messages = await conversation.messages()
        const title = `Messages between ${truncateEthAddress(
            client.address
        )} and ${truncateEthAddress(conversation.peerAddress)}`

        render(<MessageList title={title} messages={messages} />)
    }
)
```

#### Verify it works

```bash
./xmtp list-messages 0xF8cd371Ae43e1A6a9bafBB4FD48707607D24aE43
```

### Stream all messages

To stream messages from an address, we'll want to use a stateful React component. This will require doing some work in the command, as well as the Ink component

The starter command in `index.tsx` should look like this:

```ts
  .command(
    'stream-all',
    'Stream messages from any address',
    {},
    async (argv: any) => {
      throw new Error('BUILD ME')
    }
  )
```

There is also a starter React component that looks like this:

```ts
export const MessageStream = ({ stream, title }: MessageStreamProps) => {
  const [messages, setMessages] = useState<DecodedMessage[]>([]);

  return <MessageList title={title} messages={messages} />;
};
```

First, we will want to get a message Stream, which is just an Async Iterable.

```ts
const { env } = argv;
const client = await Client.create(loadWallet(), { env });
const stream = await client.conversations.streamAllMessages();
```

Then we will pass that stream to the component with something like this:

```ts
render(<MessageStream stream={stream} title={`Streaming all messages`} />);
```

Update the `MessageStream` React component in `renderers.tsx` to listen to the stream and update the state as new messages come in.

We can accomplish that with a `useEffect` hook that pulls from the Async Iterable and updates the state each time a message comes in.

You'll want to keep track of seen messages, as duplicates are possible in a short time window.

```ts
useEffect(() => {
  if (!stream) {
    return;
  }
  // Keep track of all seen messages.
  // Would be more performant to keep this to a limited buffer of the most recent 5 messages
  const seenMessages = new Set<string>();

  const listenForMessages = async () => {
    for await (const message of stream) {
      if (seenMessages.has(message.id)) {
        continue;
      }
      // Add the message to the existing array
      setMessages((existing) => existing.concat(message));
      seenMessages.add(message.id);
    }
  };

  listenForMessages();

  // When unmounting, always remember to close the stream
  return () => {
    if (stream) {
      stream.return(undefined);
    }
  };
}, [stream, setMessages]);
```

#### Verify it works

```bash
./xmtp stream-all
```

### Listen for messages from a single address

The starter for this command should look like:

```ts
  .command(
    'stream <address>',
    'Stream messages from an address',
    { address: { type: 'string', demand: true } },
    async (argv: any) => {
      throw new Error('BUILD ME')
    }
  )
```

You can implement this challenge by combining what you learned from listing all messages in a conversation and rendering a message stream.

:::tip

You can get a message stream from a `Conversation` by using the method `conversation.stream()`.

:::

#### Verify it works

```bash
./xmtp stream 0xF8cd371Ae43e1A6a9bafBB4FD48707607D24aE43
```

### Proper key management

All the examples thus far have been using a randomly generated wallet and a private key stored in a file on disk. It would be better if we could use this with any existing wallet, and if we weren't touching private keys at all.

With a simple webpage that uses Wagmi, Web3Modal, or any other library that returns an `ethers.Signer` you can export XMTP-specific keys and store those on the user's machine.

The command to export keys is `Client.getKeys(wallet, { env })`.
