var ethwallet  = require('ethereumjs-wallet')

const MyprivateKey = ''
const password = ''

const mykey = Buffer.from(MyprivateKey, 'hex')

const wallet = ethwallet.default.fromPrivateKey(mykey)
const KeywalletAddress = wallet.getAddressString()
console.log(`wallet地址:`, KeywalletAddress)


wallet.toV3(password).then((v3) => {
    console.log(v3)
}
)

wallet.toV3String(password).then((v3) => {
    console.log(v3)
}
)