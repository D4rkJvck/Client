// 1./ Define URL
const url = 'http://localhost:8080/user'

// 2./ Create Request
const request = new XMLHttpRequest()

// 3./ Set Method
request.open('GET', url)

// 4./ Send Request
request.send()

// 5./ Handle Response
request.onload = () => {
    if (request.status == 200) {
        console.log(request.responseXML)
        // const data = JSON.parse(request.responseText)
        ///////////////////
        // console.log(data)
        ////////////////
    } else {
        console.log('ERROR: ', request.statusText)
    }
}

// 6./ Handle Error
request.onerror = () => console.log('ERROR: Failed to Fetch Data')
