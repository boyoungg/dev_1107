      /* 함수 만들고 버튼 클릭하면 호출하기 */
      function myFunction(){
        alert('1');
        alert('2');
        alert('3');
    }

    /* ID 란에 입력된 값을 팝업창에 띄우기 */
    function popId(){
        alert(document.getElementById('txt_id').value);
    }


    /* 조건문 : if문, 조건에 따라 다른 결과를 선택할 수 있게 해주는 조건문 */
    // if(){
    // }else{
    // }

    function popId_if(){
        if(document.getElementById('txt_id').value == ""){ //value값이 없는지 비교 오른쪽처럼 사용하기도 함, !document.getElementById('txt_id').value
            alert('아이디를 입력해주세요');
        }else{
            alert(document.getElementById('txt_id').value);
        }
    }

    /* 변수 : let 상자이름 = 상자에 담을 데이터(숫자, 문자, 등등); */
    function popId_if_Id(){
        let userId = document.getElementById('txt_id').value;
        if(!userId){
            alert('아이디를 입력해주세요');
        }else{
            alert(userId);
        }
    }

    /* var, let, const */
    var a;
    /* var : let, const역할을 해주던 변수 */
    
    function compareVariable(){
        let num1 = 10;
        num1 = 20;
        alert('num1' + num1);

        const num2 = 30;
    }

    /* let : 변수를 계속 바꿀 수 있음, 먼저 들어간 값을 빼고 새 값을 넣는 등 */
    /* const : 무조건 초기화가 되어야 함 */