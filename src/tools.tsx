const parseText = (text: string) => {
    const regex = /!\[(.*?)\]\((.*?)\)/g;

    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    let i = 0;
    while ((match = regex.exec(text)) !== null) {
        const [fullMatch, textoCapturado, enlaceCapturado] = match;
        const textBeforeMatch = text.substring(lastIndex, match.index);
        elements.push(textBeforeMatch, (
            <a href={enlaceCapturado} key={i + '-link'}>
                {textoCapturado}
            </a>
        ));
        lastIndex = regex.lastIndex;

        i++;
    }
    const textAfterLastMatch = text.substring(lastIndex);
    elements.push(textAfterLastMatch);

    return elements;
}

const shortDate = (date: string) => {
    try {
        const dateObject = new Date(date);
        const options = { month: 'short', year: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat(navigator.language, options).format(dateObject);

        return formattedDate;
    } catch(_e) {
        return date;
    }
}

export { parseText, shortDate }
