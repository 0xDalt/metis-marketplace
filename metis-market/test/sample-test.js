const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("NFTMarket", function () {
  it("should create and execute market sales", async function (){
    const Market = await ethers.getCntractFactory("NFTMarket")
    const market = await Market.deploy()
    const marketAddress = market.address

    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()


  });
  const auctionPrice = ethers.utils.parseUnits('3', 'metis')

  await nft.createToken("https://www.sampletoken.com")
  await nft.createToken("https://www.sampletoken2.com")


  await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
  await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })

  const [_, buyerAddress] = await ethers.getSigners()

  await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice})

  const items = await market.fetchMarketItems()

  console.log('items:', items)

});
