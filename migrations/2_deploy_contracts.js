const Demonstrate = artifacts.require("Demonstrate");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(Demonstrate);
  const instance = await Demonstrate.deployed();
  console.log("Deployed contract:", instance);
  await deployer.deploy(Token(instance.address));
};
