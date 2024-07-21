<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'
    
    let WIF:string
    let address:string
    
    function createKeys () {
    
        const privKey = PrivateKey.fromRandom()
        WIF = privKey.toWif()
        console.log("Private Key WIF format is ", WIF)
        address = privKey.toAddress()
        console.log("Your bitcoin address is ", address)
    }
    
    </script>
    
    <section>
        <button class=" bg-black text-white p-2 rounded mx-auto flex" on:click={createKeys}> Generate New Wallet Keys </button>
        <p class=" bg-white text-black p-2 m-2 mx-auto flex ">Private Key WIF format is   {WIF}</p>
        <p>Your BitCoin Address is   {address}</p>
    </section>
    
    