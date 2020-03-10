async function getData() {
    const respone = await fetch("/api")
    const data = await respone.json();
    console.log(data)
}


getData()