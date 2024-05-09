"use server";
let placeOrder = async () => {
    let data = await fetch("https://simple-books-api.glitch.me/orders", {
        method: "POST",
        headers: {
            'content-Type': 'application/json',
            Authorization: 'Bearer e6e91f9227313bbc1ec76897ba996ceefb35f384755409ac6407b0f568408c32'
        },
        body: JSON.stringify({
            "bookId": 4,
            "customerName": "Ali"
        })
    })

    console.log()
  }

  export default placeOrder