const Demonstrate = artifacts.require("Demonstrate");
const Token = artifacts.require("Token");

module.exports = (deployer) => {
  deployer.deploy(Demonstrate);
};
