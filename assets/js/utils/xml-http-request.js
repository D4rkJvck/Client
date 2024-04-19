export const XMLRequest = (url, method = 'GET') => {
    // 2./ Create Request
    const request = new XMLHttpRequest()
    
    // 3./ Set Method
    request.open('GET', url)
    
    // 4./ Send Request
    request.send()
    
    // 5./ Handle Response
    request.onload = () => {
        if (request.status == 200) {
            return request.responseXML
        } else {
            console.log('[[ERROR]]: ', request.statusText)
        }
    }
    // 6./ Handle Error
    request.onerror = () => console.log('[ERROR]: Failed to Fetch Data')
}
