# 동국대학교 meta tags

![NYtimes](https://velog.velcdn.com/images/pyung1591/post/c12855bc-a6af-462e-98d2-7df48f2f473b/image.png)

![naver](https://velog.velcdn.com/images/pyung1591/post/34287bae-cdbc-46dd-aa9d-05e0a2f23183/image.png)

### meta charset="utf-8"

- charset은 문서 인코딩 방식을 지정하는 요소이며, utf-8은 유니코드와 문자를 표현하는 것에 통상적으로 사용되는 문자 인코딩 방식이다.

<br />

- NYtimes와 naver 모두 charse="utf-8"을 사용하고 있다. 국내 국외 사이트에서 통용되는 것으로 보인다.

### meta http-equiv="X-UA-Compatible" content="IE=edge"

- http-equiv는 웹 페이지에서 HTTP 헤더를 지정하는 역할을 담당하며 해당 태그는 응답 헤더에서 지정가능한 컨텐츠를 브라우저에게 전달한다.
- http-equiv 태그는 content 속성을 사용하여 값을 지정한다.
- 위 태그에서 http-equiv는 "X-UA-Compatible" 를 사용했으며 이는 웹 브라우저가 문서 렌더링 시 호환성 모드로 동작하지 않도록 한다.
- content 속성의 값 "IE=edge"을 통해 IE의 최신버전인 edge를 사용하도록 강제한다.

<br />

- 동국대학교 홈페이지와 네이버는 모두 meta http-equiv="X-UA-Compatible" content="IE=edge"를 사용하여 해당 태그에 차이가 없다.
- 반면 NTtimes의 경우 meta http-equiv="content-security-policy" 를 사용하고 있는데, 이는 XSS 방지 및 불법 content나 코드를 방지하는 보안 정책이다.

# meta property 관련

### 동국대학교 홈페이지와 타 페이지의 차이점

- 네이버는 content 값은 다르지만, meta property="og:image/type/title/url/description" content= 로 사용하는 방식은 동국대 홈페이지와 다르지 않다.
- NYtimes의 경우, meta data-rh="true" property="og:image/type/title/url/description" content= 를 사용하고 있는데, data-rh 는 React Helmet을 사용하여 HTML 문서에 메타 데이터를 제공하는데 사용된다.

### meta property="og:image" content="/data/files/banner/278/410C37C263C646ACA2FFBE0566DA97A6.jpg?v=01"

- meta property 는 웹 페이지의 메타 데이터 속성을 설명한다.
- 통상 og(Open Graph)프로토콜과 사용한다.
- og태그는 소셜 미디어에서 웹 페이지의 메타 데이터를 명시하s는 것에 사용된다.
- meta name 태그와 달리 속성의 이름 지정이 가능하다.
- og:image는 페이지가 소셜 미디어에 사용될 때 나오는 이미지 URL이다.
- content 속성 값인 "/data/files/banner/278/410C37C263C646ACA2FFBE0566DA97A6.jpg?v=01"은 소셜 미디어에 사용될 때 미리보기로 이용되는 이미지 URL을 나타낸다.

### meta property="og:type" content="website"

- og:type는 페이지의 컨텐츠 유형을 나타내며 content 속성 값 website를 통해 해당 페이지가 웹사이트임을 알 수 있다.

### meta property="og:title" content="동국대학교 대표홈페이지"

- og:title은 페이지의 제목으로, content 속성 값을 통해 해당 페이지의 제목이 "동국대학교 대표홈페이지"임을 알수있다.
- 소셜 미디어 이용시 content값은 미리보기 제목으로 이용되며 이를 통해 사용자가 페이지를 확인하기 용이해진다.

### meta property="og:url" content="dongguk.edu"

- oh:url은 해당 페이지의 URL로, content값을 통해 dongguk.edu값이 페이지의 URL임을 나타낸다.
- 소셜 미디어에서 페이지의 미리보기에 URL이 이용되며 사용자의 접속을 용이하게 한다.
- dongguk.edu는 도메인명으로 실제 URL은 https://www.dongguk.edu/ 이다.

### meta property="og:description" content="동국대학교 대표홈페이지에 오신 것을 환영합니다."

- og:description은 페이지의 설명을 나타내며, content 속성 값으로 해당 페이지의 설명이 "동국대학교 대표홈페이지에 오신 것을 환영합니다."라는 것을 알수있다.
- 소셜 미디어 공유시 미리보기의 설명으로 이용된다.

# meta name 관련

### 동국대학교 홈페이지와 타 페이지의 차이점

- 동국대학교 홈페이지에서 사용하는 description, keyword 태그는 타 웹페이지에서도 content 내용만 다를뿐 기본적인 골자는 같았다.
- 네이버와  NYtimes 모두 meta name="naver-site-verification"와 같은 웹마스터를 이용한 등록은 하지 않았다.
- viewport 값의 경우, NYtimes는 width=device-width로 동국대 페이지와 같았지만, 네이버는 meta name="viewport" content="width=1190로 디바이스에 관계없이 width 100%를 1190px로 나타나게 했다.
- theme-color, msapplication-TileColor 는 네이버와 NYtimes 모두 사용하지 않았다.

### meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"

- meta name은 웹 페이지의 메타데이터를 정의하는 HTML 태그로 브라우저 등에서 웹 페이지를 분석할 때 정보를 제공한다.
- meta name 태그는 content 속성을 사용하여 값을 지정한다.
- viewport는 모바일 기기 이용시 문서의 뷰포트를 기기의 화면 크기에 맞춰 레이아웃을 조정하는 역할을 수행한다.
- content 속성의 값인 width=device-width는 뷰포트 너비와 기기의 가로 너비를 일치시킨다.
- initial-scale=1 와 minimum-scale=1 은 페이지 로드 시 각각 초기 축척 값, 최소 축척 값을 담당하며, 이 경우 값은 1에 해당한다.

### meta name="naver-site-verification" content="2c52cf1c7dd91984a754fb73e63d300c010b88c6"/>

- meta name 태그는 해당 사이트가 네이버 웹마스터 도구에 사이트를 등록했음을 나타내고, content 값은 소유권 확인 코드를 나타낸다.

### meta name="description" content="동국대학교 대표홈페이지에 오신 것을 환영합니다."

- meta name="description"을 통해 해당 태그가 웹 페이지에서 설명을 지정하고 있음을 알수있으며, 해당 내용은 content 속성값을 통해 동국대학교 대표홈페이지에 대한 것임을 나타낸다.

### meta name="keywords" content="동국대, 동국대학교, 동국대학교대표홈페이지"

- meta name="keyword", 검색 엔진 최적화에 이용되는 키워드 메타 태그로, 웹 페이지 검색의 키워드를 지정하는 것이다.
- content 값으로 해당 키워드의 내용을 지정했다.

### meta name="msapplication-TileColor" content="#da532c"

- meta name="msapplication-TileColor"은 MS의 윈도우 기기에서 사용되는 tile app 설정에서 TileColor에 대한 메타 태그이다.
- content 값에서 해당 속성값이 #da532c으로 설정됐음이 나타난다.

### meta name="theme-color" content="#ffffff"

- meta name"theme-color"은 웹 페이지의 테마 색 지정에 사용되며, content 속성에서 해당 값은 #ffffff로 나타난다.
