var heading = document.querySelector('#heading'); //#geading에 모든 걸 담음(태그) + 태그의 자바스크립트 객체화
        console.log(heading);
        heading.onclick = function(){  //이벤트도 태그에 다 정의 되어 있음 이미
            heading.style.color='red'; //태그에 새로운 속성 넣는 것과 같음
        }