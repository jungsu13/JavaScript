// 1. 문자열 String
// 문자열 테이타를 객체로 취급

{
    // const str = 'you he she they we he me'
    // console.log(str.length);
    // console.log(str.charAt(4));
    // console.log(str.indexOf('he'));
    // console.log(str.indexOf('dog'));   // 없으면 -1 반환
    // console.log(str.lastIndexOf('he'));
    // console.log(str.match('he'));
    // console.log(str.match('he').input);
    // console.log(str.match('he').index);
    // console.log(str.replace('they','html'));
    // console.log(str.search('she'));
    // console.log(str.slice(4,10));
    // console.log(str.slice(5,10));
    // console.log(str.substring(3,12));
}


// 문자열을 배열로 만들기
{
    // const str = 'html,css,javascript'
    // const result = str.split(',')
    // console.log(result);

    // const str2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nam, molestias aspernatur maxime, nisi dolorum quos nulla soluta ut qui tempore ex laboriosam. Exercitationem autem alias dolore cum, et excepturi!'

    // const result2 = str2.split(' ')
    // console.log(result2);
}


// 대소문자   
{
    // const str = 'Hello'
    // console.log(str.toUpperCase());
    // console.log(str.toLocaleLowerCase());
}




// 문자열 합치기
{
    // const str = 'hello'
    // const result = str.concat('world')
    // console.log(result);
}


// 공백 제거     문자 제일 앞과 뒤 띄어쓰기 삭제
{
    const str = ' hello world'
    const result = str.trim()
    console.log(str);
    console.log(result);
}


// 방문자의 이름을 대문자로 출력
// 전화번호의 뒷자리 4개를 *로 출력
{
    // const name = prompt('당신의 이름은?','')
    // const phone = prompt('당신의 연락처는?','')
    // const name2 = name.toUpperCase()
    // const phone2 = phone.substring(0, phone.length -4 ) + '****'

    // document.write(name2, '<br>')
    // document.write(phone2, '<br>')
}

