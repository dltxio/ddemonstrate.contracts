// SPDX-License-Identifier: CC-BY-1.0
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IMintable.sol";

contract Token is IMintable, ERC20, Ownable {

    address private immutable _contract;

    function decimals() public view virtual override returns (uint8) {
        return 1;
    }

    constructor(address contract_) ERC20("ddemonstrate", "DD") {
        require(contract_ != address(0), "Invalid address");
        _contract = contract_;

    }

    function mint(address who) onlyContract override external {
        _mint(who, 1);
    }

    modifier onlyContract() {
        require(msg.sender == _contract);
        _;
    }
}
