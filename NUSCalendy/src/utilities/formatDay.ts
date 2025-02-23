export const formatDay = (day: number) => {
    switch (day) {
        case 0:
            return 'Monday';
        case 1:
            return 'Tuesday';
        case 2:
            return 'Wednesday';
        case 3:
            return 'Thursday';
        case 4:
            return 'Friday';
        case 5:
            return 'Saturday';
        case 6:
            return 'Sunday';
        default:
            throw new Error("Not a valid day???? Are we living in an alternate universe")
    }
}

export const formatTime = (time) => {
    const newDate = new Date(time)
    const day = newDate.toLocaleString('default',{ weekday : 'long' })
    const month = newDate.toLocaleString('default',{ month : 'long' })
    const year = newDate.toLocaleString('default',{ year : 'numeric' })
    const date = newDate.getDate()
    const formattedDate = `${day}, ${month} ${date} ${year}`
    return formattedDate
}