const Demonstrate = artifacts.require("Demonstrate");
const Token = artifacts.require("Token");

module.exports = async (deployer) => {
  await deployer.deploy(Demonstrate);
  const dd = await Demonstrate.deployed();
  console.log(`Deployed contract: ${dd.address}`);
  
  await deployer.deploy(Token, dd.address);
  const token = await Token.deployed();
  console.log(`Deployed contract: ${token.address}`);
};
