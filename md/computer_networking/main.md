# 5 Link layer

## 5.1 Introduction
- Node: Any device that runs link-layer (layer 2) protocol
  - Nodes include hosts, routers, switches, and WiFi access points
- Link: Communication channels that connect adjacent nodes along the communication path

## 5.1.1 Services provided by the link layer
- Framing
- Link access
  - Medium access control (MAC) protocol: rules by which a frame is transmitted onto the link
    - point-to-point protocol (PPP): trivial
    - multiple access: nodes share a single broadcast link
- Reliable delivery
  - optional
  - high overhead
  - error detection and correction

## 5.1.2 Where is the link layer implemented
- network adapter; aka network interface (NIC)
- mostly implemented in hardware
  - send side: software components implement higher-level link-layer functionality include assembling link layer addressing info and activating the controller hardware
  - recv side: software to respond to controller interrupts, handle error conditions and pass datagram up to the network layer

## 5.3 Multiple access links and protocols
- Link types
  - point-to-point link
  - broadcast link
    - e.g. ethernet and wireless LANs
    - has multiple access problem: how to coordinate?
- Multiple access protocols
  - can deal with collision of frames
  - types:
    - channel partitioning protocols
    - random access protocols
    - taking-turns protocols
  - Ideal: when channel is R bps
    - Only 1 node: that node has throughput R bps
    - M nodes: each has R/M bps on average
    - decentralized: no master node for single point of failure (SPOF)
    - simple & cheap to implement

## 5.3.1 Channel partitioning protocols
- time-division multiplexing (TDM)
  - divide time into time frames
  - divide time frame into N time slots for N nodes
  - Good: fair & avoid collision
  - Bad: no higher than R/N bps even when only 1 node; must wait for turn
- frequency-division multiplexing (FDM)
  - divide R bps channel into different frequencies each with bw R/N for each node
  - same good & bad as TDM
- code division multiple access (CDMA)
  - assigns unique code to each node for encoding & decoding
  - Good: each node can transmit simultaneously

## 5.3.2 Random access protocols
- node always transmits at full rate of channel -- R bps
- when collision: retransmit until without collision; wait random delay
- slotted ALOHA
  - assume:
    - all frame L bits
    - time slot L/R seconds
    - node transmit only at beginning of slots
    - nodes synchronized to know when the slots begin
    - all nodes detect collision before slot ends
  - operation:
    - fresh frame -> node sends at the beginning of next slot
    - collision: retransmit with probability p in [0,1]
  - Good:
    - single only node can transmit at full rate R
    - highly decentralized: each node can detect collision
  - Bad: 
    - synchronization needed
    - unslotted version: no sychronization
  - effective tx rate: 1/e = 0.37
- pure ALOHA (no sync)
  - effective tx rate: 1/2e (no other node can transmit within 1 time slot before t and 1 time slot after t)
- Carrier sense multiple access (CSMA)
  - carrier sensing: node listens to the channel before transmitting
  - collision detection: node listens to the channel while transmitting
  - channel propagation delay: time to detect signal from one node to another (wave propagation)
    - crucial for performance
  - CSMA/CD (with collision detection)
    - if detects signal from other adapters while transmitting then abort and and wait random amount of time
    - wait: binary exponential backoff

## 5.3.3 Taking-turns protocols
- polling protocol
  - master node polls each node in round robin
    - master node tells node 1 to send max X frames, and after it finished, tells node 2 to send max Y frames...
  - Bad:
    - polling delay
    - SPOF
- token-passing protocol
  - token exchanged between nodes
  - Good:
    - decentralized
  - Bad:
    - SPOF

## 5.4 Switched local area networks
- switch link-layer frames
  - switches do not have link-layer address (i.e. MAC) (transparent carrying job)
- Address resolution protocol (ARP)
 - translate between IP address and MAC address
   - can't resolve address -> broadcast special ARP packet containing IP address and MAC address (broadcast address FF-FF-FF-FF-FF-FF)
   - ARP modules in adapters receiving the frame -> match -> sends mapping within a standard frame
 - is a protocol between network-layer and link-layer!
 - send across subnet:
   - host sends to MAC address of adapter for router interface between 2 subnets
   - router looks up correct interface by forwarding table
- hub:
  - recreates bit by bit, boosts energy strength
- Ethernet:
 - connectionless & unreliable
 - protocols have different flavors
- switch:
  - operates up through layer 2
  - forwarding & filtering with switch table that associates MAC address with interface that leads toward that MAC address
    - avoids broadcasting
  - self-learning
  - plug and play
  - full duplex
  - eliminates collision
  - heterogeneous links
- switch vs router:
  - switch good:
    - switch is plug and play
    - switch only processes up to layer 2; router up to layer 3
  - switch bad:
    - switched network is restricted to spanning tree (to prevent cycling of broadcast frames)
    - large switched network requires large ARP tables in hosts and routers -> increased ARP traffic and processing
  - router good:
    - packets not restricted to spanning tree due to hierarchical network addressing
    - provides firewall protection against layer 2 broadcast storms
  - router bad:
    - not plug and play
- switched LAN:
  - bad:
    - lack of traffic isolation: unlearned destination in ARP/DHCP frames/msgs traverse entire network
    - inefficient: more switches are needed for isolation of groups
    - cable managing for multiple groups is hard
- VLAN:
  - hosts within a VLAN communicate with each other as if they (and no other hosts) were connected to switch
- multiprotocol label switching (MPLS)
  - MPLS enabled routers do not touch IP header
  - routes by the wrapping MPLS header
  - enables routings that don't follow IP routing protocols
  - can be used to implement VPN

## 6 Wireless and mobile networks

## 6.1 Introduction
- base stations
  - access points
  - cell towers
- handoff: hosts between base station
- classification:
  - single hop, infrastructure based (has base station connecting to larger wired network i.e. internet)
  - single hop, infrastructure-less (e.g. bluetooth)
  - multi-hop, infrastructure-based (e.g. wireless mesh networks)
  - multi-hop, infrastructure-less (e.g. mobile ad hoc networks)

## 6.2 wireless links and network characteristics
- difference from wire to wireless
  - decreasing signal strength (attenuation)
  - interference
  - multipath propagation (physical distance changing due to reflection & sender moving etc.)
- problems:
  - A sends to B, C sends to B
    - hidden terminal problem: A & C can't communicate with each other due to physical obstructions
    - fading: A & C can't communicate with each other due to weak signal

## 6.2.1 CDMA (Code division multiple access)
- encode data $d_i$ with $M$ bit slots and code $c_m: Z_{i,m} = d_i \cdot c_m$
- decode with $d_i = \sum_m(Z_{i,m} * c_m) / M$
- Assumptions: interference is additive & signal strengths are the same
  - If senders' codes are chosen carefully, receivers can still recover the signal using the same code

## 6.3.1 The 802.11 Architecture
- basic service set (BSS)
  - 1 or more wireless stations & a central base station (access point (AP))
- channels and association
  - assign service set identifier (SSID) to an AP
  - assign channel to AP
- WiFi jungle: a wireless station receives a sufficiently strong signal from 2 or more APs
  - need to choose one to "associate" with
- AP periodically send beacon frames
  - includes AP's SSID and MAC
  - a wireless station scans all channels to seek beacon frames
- passive scanning: listen for beacon frames
- active scanning: broadcast probe frame that will be received by all APs within range and APs respond
- after selecting which AP to associate with
  - sends association request frame to AP & AP responds
  - host usually sends a DHCP discovery message

## 6.3.2 The 802.11 MAC protocol
- CSMA/CA (with collision avoidance)
  - no collision detection because
    - hardware to send and recv at the same time is costly
    - all collision can't be detected due to hidden terminal problem
- link-layer acknowledgement
  1. destination receives a frame (passes CRC)
  2. waits a short Inter-frame spacing (SIFS)
  3. sends ack frame
  4. if transmitting station doesn't receive ack in some time, it retransmits the frame
  5. after a few retransmissions, it gives up and discards the frame
- CSMA/CA protocol:
  - init: station senses the channel idle -> transmits its frame after a short period of time "Distributed Inter-frame Space" (DIFS)
  - if channel not idle, chooses a random backoff count down by exp. backoff 
  - else transmits entire frame and waits for ack
  - if ack is not received, station goes back to backoff phase, else go back to init
- RTS & CTS (request to send, clear to send) to deal with hidden terminals
  - optional
  - overhead: has delay & consumes channel resources
  - H1 -- AP -- H2 so that H1 can't hear H2 due to signal fading
    - H1 sends RTS to reserve access to channel, indicating total time required to transmit the data and ack frame
    - AP receives the frame and send CTS, giving permission to H1 to send and ask other stations not to send

## 6.3.3 The IEEE 802.11 Frame
- has 4 address fields
  - address 1: MAC of destination station 
  - address 2: MAC address of station that transmits the frame
  - address 3: MAC of router that connects this BSS
- in a BSS, router treats a wireless is just one of the host, 
  - AP converts between 802.3 Ethernet frame and 802.11 frame

## 6.3.4 Mobility in the same IP subnet
- H1 moving from BSS1 to BSS2 under the same switch
- To maintain the same TCP connection
  - One solution is for AP2 to send a broadcast Ethernet frame with H1's source address to the switch after association
    - switch updates its forwarding table for H1 to be reached via AP2

## 6.3.5 Advanced features in 802.11
- rate adaptation
  - dynamic selection of physical layer modulation technique based on channel characteristics (similar to TCP probing)
- power management
  - node indicates to AP it'll be going to sleep w/ timer
  - node wakes up before AP sends beacon frame at regular interval
  - node can be asleep 99% of the time

## 6.3.6 Personal Area Networks: Bluetooh and Zigbee
- bluetooth
  - short range, low power, low cost
  - piconet up to 8 active devices
    - 1 master determines the clock
  - MBits/sec
- zigbee
  - low poered, lower data rate, lower duty cycle app than bluetooth
  - defines channel rates of 20-250kbps
  - two modes
    - reduced-function devices operate as slave devices under control of a single full function device
    - multiple full function devices can form a mesh network

# 6.4 Cellular Internet Access

## 6.4.1 An overview of cellular network architecture
- 2G: voice connections to the telephone network
  - cell: a geographic coverage area
  - each cell contains a base transceiver station (BTS)
  - combined TDM + FDM ($T\cdot F$ simultaneous calls)
  - base station controller (BSC) allocates BTW radio channels
  - BSC + BTS = base station system (BSS)
  - mobile switching center (MSC) for user auth and accounting

## 6.4.2 3G: extending the internet to cellular subscribers
- 2 types of nodes:
  - Serving GPRS Support Nodes (SGSNs) [General packet radio service = GPRS]
    - deliver datagrams to/from mobile nodes in radio access network where it is attached
    - interact with MSC, provide user authorization, perform datagram forwarding between mobile nodes and a GGSN
  - Gateway GPRS Support Nodes (GGSNs)
    - last piece of 3G infrastructure that a datagram from a mobile node encounters
    - looks like any other gateway router
- radio access network
  - wireless first hop network
  - radio network controller (RNC)
    - controls several cell base transceiver stations similar to base station in 2G
- each cell's wireless link operates between the mobile nodes and a base transceiver station as in 2G
- RNC connects to both the circuit switched cellular voice network via an MSC and to the packet switched internet via an SGSN
- 3G cellular & cellular data services use different core networks but share a common first/last-hop radio access network
- see book figure

## 6.4.3 4G LTE (Long term evolution)
- evolved packet core (EPC)
  - "all-IP" network, both voice & data carried in IP datagrams
    - IP's "best effort" service model not best suited to VoIP; need to manage network resources for high QoS
- LTE Radio access network
  - combination of FDM and TDM on downstream channel
  - slots allocated by algorithm (more slots allocated=higher transmission rate)

## 6.5 Mobility management principles
- from the network layer's standpoint, how mobile is a user?
  - laptop with a wireless network interface card around in a building: not mobile from a network layer perspective
  - zooming along the autobahn passing through multiple wireless access networks wanting to maintaining TCP connection: mobile
  - In between: moving between locations but no need to maintain the same connection
- how important for the mobile node's address to always remain the same?
  - if same, application need not be concerned with a potential change in IP address
- what supporting wired infrastructure is available?
  - ad hoc network?
- terminologies:
  - home network: permanent home of a mobile node (mobile node has the permanent address)
  - home agent: entity within the home network that performs the mobility management functions
  - foreign network: network in which the mobile node is currently residing
  - foreign agent: same as home agent but in the foreign network
  - correspondent: entity wishing to communicate with the mobile node

## 6.5.1 Addressing
- to keep user address as it moves
  - approach 1: foreign network to advertise to all other networks that the mobile node is resident there
    - advertise to neighbors that it has a highly specific route to the mobile node's permanent address
    - exchange of intradomain the interdomain routing information 
    - good:
      - no significant changes to the network layer infrastructure
      - easy to route datagrams to the mobile node as forwarding tables will direct datagrams to the foreign network
    - bad:
      - not scalable
  - approach 2: push mobility functionality from the network core to the network edge
    - home agent tracks foreign network
    - needs a protocol between the mobile node and the home agent
    - foreign agent role:
      - create care-of-address (COA) for the mobile node with network portion of the COA matching that of the foreign network
    - 2 addresses for mobile node: permanent address & foreign address
    - mobile node can also assume the functionality of the foreign agent

## 6.5.2 Routing to a mobile node
- indirect routing approach
  - corespondent addresses the datagram to the mobile node's permanent address
    - unaware of it's in home network or visiting foreign network
  - home agent has a 2nd job to lookout for arriving datagrams addressed to nodes (attached to the home network) which are currently resident in a foreign network
    - forward datagram to foreign agent using the mobile node's COA
    - foreign agent forwards to mobile node
    - home agent encapsulates the correspondent's original complete datagram within a new datagram (tunneling)
      - to make application receiving the datagram unaware it's forwarded
    - foreign agent who "owns" the COA will receive and decapsulate the datagram
  - mobile node can address its datagram directly to the correspondent
  - protocols needed:
    - mobile node to foreign agent protocol
    - foreign agent to home agent registration protocol
    - home agent datagram encapsulation protocol
    - foreign agent decapsulation protocol
  - bad:
    - inefficiency: triangle routing problem
- direct routing approach
  - adds complexity to solve inefficient of triangle routing
  - correspondent agent in correspondent's network first learns the COA of the mobile node (by querying home agent)
    - correspondent itself can perform the function as well
  - correspondent agent tunnels datagrams directly to the mobile node's COA (analogous to tunneling by home agent)
  - challenges:
    - mobile user location protocol needed
    - how to route data to mobile node's new foreign network? COA is only queried once and has to be updated
      - solution 1: new protocol to notify the correspondent of the changing COA
      - solution 2: new foreign agent provides anchor foreign agent with mobile node's new COA

# 6.6 mobile IP
- Internet architecture and protocols for supporting mobility, collectively known as mobile IP
- main pieces
  - agent discovery
    - protocols for home/foreign agent advertises its services to mobile nodes
    - protocols for mobile nodes to solicit the services of a foreign/home agent
  - registration with the home agent
    - protocols used by the mobile node and/or foreign agent to register and deregister COA with a mobile node's home agent
  - indirect routing of datagrams
    - manner in which datagrams are forwarded to mobile nodes by a home agent, including
      - rules forwarding datagrams
      - rules for handling error conditions
      - forms of encapsulation
- agent discovery
  - agent advertisement
    - foreign or home agent advertises its services using an extension to the existing router discovery protocol
      - agent periodically broad casts an ICMP message on all links to which it is connected
      - router discovery message contains the IP address of the router (the agent)
        - thus a mobile node learns the agent's IP address
      - router discovery message contains additional information needed by the mobile node
        - Home agent bit, foreign agent bit, registration requried bit, encapsulation bits, COA
  - agent solicitation
    - mobile node waits to learn about agents without waiting to receive an agent advertisement
      - broadcast an agent solicitation message, an ICMP message with value type 10
      - agent receiving that will unitcast an agent advertisement directly to the mobile node
- registration with the home agent
  - via foreign agent/mobile IP node itself
    1. mobile node sends a mobile IP registration message to the foreign agent, carried within a UDP datagram to port 434
      - carries:
        - a COA advertised by the foreign agent
        - the address of the home agent (HA)
        - the permanent address of the mobile node (MA)
        - requested lifetime of registration

    2.
      - foreign agent receives the registration message and records the mobile node's permanent IP address. 
      - foreign agents now should be looking for datagrams containing an encapsulated datagram whose destination address matches the permanent address of the mobile node
      - foreign agent sends a mobile IP registration message within a UDP datagram to port 434 of home agent, carrying the same things above
    3. 
      - home agent receives the registration request
      - check for authenticity & correctness
      - binds the mobile node's permanent IP address with the COA
      - now datagrams arriving at the home agent and addressed to the mobile node will be encapsulated and tunneled to the COA
      - home agent sedns a mobile IP registration reply with things above
    4. foreign agent receives the registration reply and forwards it to the mobile node
  - foreign agent need not explicitly deregister a COA when a mobile node leaves its network
    - this happens automatically when mobile node moves to a new network and register a new COA
  - see figure in book

# 6.7 Managing mobility in cellular network
- GSM cellular network architecture
  - indirect routing approach
    - home network maintains a database "home location register" (HLR)
      - contains the permanent cell phone number and subscriber profile information
      - contains current locations of these subscribers
        - if user is roaming in another provier's cellular network, HLR contains enough info to obtain an address in the visited network
      - special switch in home network, Gateway Mobile services Switching Center (GMSC) is contacted by a correspondent when a call is placed to a mobile user
    - visited network maintains a database "visitor location register" (VLR)
      - contains entry for each mobile user that is currently in the portion of the network served by the VLR
        - entries come and go as mobile users enter and leave

# 6.7.1 Routing calls to a mobile user
- how a call is placed to a mobile GSM user in a visited network
  1. First leg:
    - correspondent dials the mobile user's phone number. Leading digits globally identify the mobile's home network. Call is routed from the correspondent through the public switched telephone network (PSTN) to the home MSC in the mobile's home network
  2. home MSC receives the call and interrogates the HLR for the location of the mobile user. Simplest case, it returns the mobile station roaming number (MSRN) which is temporarily assigned to a mobile when it enters a visited network (analogous to COA in mobile IP, invisible to corespondent and mobile). If HLR does not have roaming number, it returns the address of the VLR in the visited network. In this case, the home MSC needs to query the VLR to obtain the roaming number of the mobile node.
    - when mobile is switched on or enters a visited network covered by a new VLR, it must register with the visited network, done through signalling messages between the mobile to the mobile's HLR
  3. Given the roaming number, home MSC sets up second leg of the call through the network to the MSC in the visited network. Call completed, being routed as (the correspondent to the home MSC -> visited MSC -> base station serving the mobile user)
  - see figure in book

# 6.7.2 Handoffs in GSM
- handoff occurs when a mobile station changes its association from one base station to another during a call
  - below assumes old and new base stations share the same MSC, and rerouting occurs at this MSC
- mobile periodically measures strength of beacon signal from its current base station + nearby base stations it can hear
  - reported once or twice per second
  - handoff initiated by the old base station based on these measurements
- steps when a based station decide to hand off a mobile user:
  1. old base station (BS) informs the visited MSC that a handoff is to be performed and the BS (or sets of BSs) to which the mobile is to be handed off.
  2. visited MSC initiates path setup to the new BS, allocate resources needed to carry the rerouted call, signal the new BS that a handoff is about to occur
  3. new BS allocates and activates a radio channel for use by the mobile
  4. new BS signals back to the visited MSC and the old BS that the visited-MSC-to-new-BS path has been established and that the mobile should be informed of the impending handoff (with all needed information). 
  5. mobile is informed the handoff, unaware of the work from the new BS & the MSC
  6. mobile and the new BS exchange 1 or more messages to fully activate the new channel in the new BS
  7. mobile sends a handoff complete message to the new BS, which is forwarded up to the visited MSC. Visited MSC then reroutes the ongoing call to mobile via the new BS
  8. resources allocated along the path to the old BS are released
  - see figure in book
- what happens when mobile moves to a BS that is associated with a different MSC than the old BS
  - GSM defines the notion of an anchor MSC
    - MSC visited by the mobile when a call first begins, remain unchanged during the call
  - call is routed as (home MSC -> anchor MSC -> visited MSC)
    - when mobile moves from the coverage area of one MSC to another, ongoing call is rerouted from the anchor MSC to the new visited MSC
    - at most 3 MSCs at all times

# 6.8 Wireless and mobility: Impact on Higher layer protocols
- in the case of mobile users, TCP segment loss can result from
  - network congestion
  - handoff
- in all cases, TCP's receiver-to-sender ACK indicates only that a segment was not received intact
  - sender is unaware of whether the segment was lost due to congestion, handoff, or detected bit errors 
    - sender's response is the same in cases: retransmit the segment
- TCP's congestion-control response is also the same in all cases: TCP decreases its congestion window
  - unconditionally decreasing its congestion window, implicitly assumes that segment loss results from congestion rather than corruption or handoff
- Approach to deal with problematic congestion control response
  - local recovery (e.g. at the wireless link)
  - TCP sender awareness of wireless links
  - split connection approaches
    - E2E connection broken to 2 transport layer connections: from the mobile host to the wireless AP, and from the wireless AP to the other communication end point (assumed to be a wired host)
