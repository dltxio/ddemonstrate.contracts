const Demonstrate = artifacts.require("Demonstrate");

module.exports = async (deployer) => {
  const demonstrate = await deployer.deploy(Demonstrate);
};
