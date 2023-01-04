/*
    Дано довільний url:
    'https://purpleschool.com/course/javascript'

    Необхідно написати функцію, котра виводить у консоль:
        - протокол (https)
        - доменне імʼя (purpleschool.com)
        - шлях всередині сайту (/course/javascript)
 */

const url = 'https://purpleschool.com/course/javascript';

function parseUrl(url) {
    const [protocol, ...domainAndPath] = url.split('://');

    if(protocol === 'https' || protocol === 'http') {
        console.log(`Protocol is: ${protocol}`);
        const [domainName, ...pathArray] = domainAndPath[0].split('/');
        console.log(`Domain name is: ${domainName}`);
        console.log(`Path is: /${pathArray.join('/')}`);
        return;
    }

    console.log('Url is not correct!');
}

parseUrl(url);