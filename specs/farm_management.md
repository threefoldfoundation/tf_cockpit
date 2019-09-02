# Specification for farm management

In this document I will try to explain what are the different feature we want to offer to a farmer to manage its farm.

Mockups / func specs

https://docs.google.com/document/d/1ktOOPWeFUrdCRNIk2gMWwcOTGLt5Sgj6xps36EzhwOc/edit#heading=h.1xtll19lvo4x

## Features

- [Edit public information about his farm](edit-farm-information)
- [List all the nodes in his farms](#node-listing)
- [Confirm that a booted node claiming to be part of his farm actually belongs to him](#node-approval)
- [Configuration of the resource unit prices](#pricing)
- [See the token generated over a month](#token-generation)

### Edit farm information

This is a basic feature where the farmer can "customize" the information about his farm. Some information will be public other private.

Public information:

- 3bot ID: unique ID of the farm
- Name: arbitrary name for his farm
- Description: optional text
- Location: coordinate of the farm
- Contact email: an email address client/user can use to contact the farmer

Private information:

- VAT number
- Company registration number

### Node listing

This feature allow a farmer to see a table with all the nodes from his farm with some useful information about the nodes, like:

- uptime
- number of different workload provisioned on the node
- date the node join the farm
- ... (we can think about a lot of other info to add here)

### Node approval

This feature let a farmer explicitly approve a node to join his farm. This is a little double security we want to put in place.
For a node to join a farm, 2 things will be required:

1. The node will need to be booted with a special kernel parameter (most probably the public key of the farm 3bot)
2. Once the node boot, it will register itself in the BCDB. But before the node can start accepting reservation, the farmer needs to approve the node in his farm.

This allow to prevent an attacker to create some fake node attached to a farm and provide a bad service to lower the reputation of the farmer.
This also allow the farmer to delete a node in the eventually the hardware would die.

### Pricing

The farmer needs to be able to set the price of its capacity. The capacity is expressed in resource unit (RU).  
At the moment we have 4 RU:

- compute unit (CU)
- memory unit (MU)
- SSD unit (SU)
- HDD unit (HU)
- in the future most probably network unit (NU) will be added.

If the price would be per farm or per node is still to be decided. But I think having it configurable per node is nicer.

### Token generation

This allow the farmer to see how muck token will be minted at the end of the minting period.

No required in the first version, but having some kind of calculator where a farmer can plan future hardware upgrade and ROI would be a nice addon to this.
