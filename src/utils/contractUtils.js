export const formatAddress = (address) =>  {
    const formattedAddr = address.slice(0, 5) + "..." + address.slice(-4);

    return formattedAddr;

}


export const shortenText = (text) =>  {
    const shortenedText = text.slice(0, 25) + "..."

    return shortenedText;

}


export const textToLink = (text) => {
    const newText = text.replace(/\s/g, "+");
    return newText;
}

export const linkToText = (text) => {
    const newText = text.replace(/\+/g, " ");
    return newText;
}


export const getTimestampDate= (_timestamp) => {
    let date = _timestamp.getDate() + 1
    let month = _timestamp.getMonth() + 1
    let year = _timestamp.getFullYear()
    
    let formattedDate = `${date}/${month}/${year}`

    return formattedDate
}

export const getTimestampTime = (_timestamp) => {
    let hours = _timestamp.getHours();
    let minutes = _timestamp.getMinutes();

    let formattedTime = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0')

    return formattedTime
}

export const truncateText = (_text, _num) => {
    return _text.slice(0, _num)
}

export const sortMessagesByTimestamp  = (_messages) => {
    const newMessages = [..._messages].sort((msgA, msgB) => {
        return msgB.timestamp.getTime() -msgA.timestamp.getTime() 
    })

    return newMessages
}