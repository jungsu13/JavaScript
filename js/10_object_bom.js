// Browser Object Model

{
    // window.open('https://daum.net')     //팝업 허용

    // window.alert('안녕')    //확인 클릭해야 다음 진행

    // window.prompt('이름은?')
    // window.confirm('정말 삭제하시겠습니까?')

// -------------------------------------
    // window.setInterval( function(){} )
    // window.setInterval( () => {} )
// ------------------------------------

    // window.setInterval( () => {
    //     console.log('안녕');
    // }, 1000)

    // window.setTimeout( () => {
    //     console.log('안녕');
    // }, 3000)

    window.open(
        './popup.html',
        'popup1',
        'width=300, height=200, left=100, top=50'
        // 'width=500, height=300, right=100, bottom=50'    // 위치는 왼쪽 위 기준 - 오른쪽 아래 기준 적용X
    )

    
}

// screen 객체
{
    console.log(screen.width);
    console.log(screen.height);
}


// location 객체
{
    console.log(location.href);
    console.log(location.hostname);
    console.log(location.protocol);
}


// navigator 객체
{
    console.log(navigator.userAgent);
}