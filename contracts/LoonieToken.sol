pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract LoonieToken is MintableToken {
    string public name = "Loonie Token";
    string public symbol = "LNI";
    uint8 public decimals = 18;
}