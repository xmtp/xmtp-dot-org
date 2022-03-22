# How do I restrict messaging to members of a token-gated community?

XMTP is a universal messaging protocol that guarantees message delivery from any sender to any eligible recipient. The protocol does not currently specify eligibility restrictions, so in practice, any sender can send a message to any recipient.

In the future, the network may incentivize nodes to reject messages that are addressed to ineligible recipients. Until then, clients are responsible for enforcing any restrictions on message sending or display:

- To restrict sending, developers may superficially restrict the set of recipients for any sender.
- To restrict display, developers may filter received messages through a list of permitted sender addresses.

The client SDK may in the future provide components and utilities that achieve these effects.
