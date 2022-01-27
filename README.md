## 제목 (Header) : #의 (1~6개) 갯수에 따라 크기가 달라짐

## 문장
  문장은 별 다른 것 사용하지 않고 사용가능
  
## 줄바꿈  
  줄바꿈을 하고자 할 때는 띄어쓰기를 2번 한다.
  안 될 경우에는 <br/> 태그를 사용한다.

## 강조
_이텔릭_          : 이텔릭체 사용  
**두껍게**        : 두껍게 사용  
**_동시 사용시_**  : 동시사용  
~~취소선~~         : 취소선 사용  
<u>밑줄</u>        : 밑줄 사용  
<br/>
<br/>
## 목록
ol > li 와 같이 사용하기
1. 순서가 필요한 목록
1. 순서가 필요한 목록
    1. 순서가 필요한 목록 (들여쓰기 2번 사용 시 서브 목록)
  
ul > li 와 같이 사용하기
- 순서가 필요없는 목록
- 순서가 필요없는 목록
- 순서가 필요없는 목록
    - 순서가 필요없는 목록 (마찬가지로 들여쓰기 2번)
- 순서가 필요없는 목록
<br/>
<br/>
## 링크
1. <a href="https://google.com" title="네이버" target="_blank">GOOGLE</a>
1. [GOOGLE](https://google.com "네이버")  
※ target 속성은 지원하지 않음
<br/>
  <br/>
## 이미지
1. <img src="./favicon.png" alt="로고">

1. ![로고](./favicon.png)

1. 링크 + 이미지 사용
    1. [![로고](./favicon.png)](https://google.com)
<br/>
<br/>
## 인용문 ( > 사용 )
꺽쇠 개수에 따라 인용문을 중첩시킬 수 있음
> 남의말이나......(네이버사전)
>> 안녕.........(철이)
<br/>
<br/>
## 인라인 코드 강조 (backtick 기호 사용 ``)
CSS에서 `background` 혹은 `background-image` 속성으로 배경삽입 가능
<br/>
<br/>
## 블록 코드 강조 (backtick 3개사용)
```html
<a href="https://google.com" title="네이버" target="_blank">GOOGLE</a>
```

css, python, javascript, bash, plaintext 등 사용 가능
<br/>
<br/>
## 표 ( | 를 이용하여 컬럼을 잡아주고 줄바꿈하여 입력)

position 속성

값 | 의미 | 기본값
--|:--:|--:
static | 기준없음 | O
relative | 요소 자신 | X
absolute | 위치상 부모요소 | X
fixed | 뷰포트 | X
<br/>
<br/>
## 원시 HTML (Raw HTML)
표준체계가 없으므로 HTML이 사용가능

동해물과 <span style="color:red;">백두산</span>이 마르고 닳도록</br>
하느님이 보우하사 우리나라 만세  
<u>무궁화</u> 삼천리 화려강산</br>
</br></br>
## 수평선 (Horizontal Rule)
  ---
  ***
  ___