# 프로젝트 개요

- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅

- `npm install` 커맨드를 실행하여 노드 모듈을 설치합니다.
- `npm run start` 를 통해 리액트 앱을 실행시키고 http:localhost:3000 을 통해 접속합니다.

## Favicon 세팅
### 각 파일의 역할
- apple-icon: iOS 기기에서 사용되는 아이콘으로, 사파리 브라우저의 북마크, 홈 화면에 추가될 때나 앱처럼 실행될 때 표시됩니다.
- ms-icon: 마이크로소프트의 윈도우 타일에 사용되며, 윈도우 OS에서 웹 사이트를 핀하여 시작 메뉴나 타일 화면에 추가할 때 표시되는 아이콘입니다.
- android-icon: 안드로이드 기기에서 사용되는 아이콘으로, 홈 화면에 웹 애플리케이션을 추가할 때 표시됩니다.
- browserconfig: 이는 마이크로소프트 윈도우에서 사용자가 웹 사이트를 타일로 고정했을 때의 설정을 정의하는 XML 파일입니다. 이 파일은 타일의 배경 색상, 아이콘 등을 지정할 수 있게 해줍니다.
- Webmanifest: 프로그레시브 웹 앱(PWA)의 설정과 외관을 정의하는 JSON 파일로, 애플리케이션의 이름, 시작 URL, 아이콘, 배경 색상, 디스플레이 유형 등을 브라우저에 알려주어 웹 앱이 네이티브 앱처럼 동작하게 합니다.
- Sitemap: 웹사이트의 모든 페이지 URL을 목록화한 XML 파일로, 검색 엔진이 웹사이트의 구조를 이해하고 모든 페이지를 효율적으로 크롤링하도록 돕습니다.

## SEO 스코어 분석

- https://smallseotools.com/website-seo-score-checker/
  ![image](https://github.com/gihwan-dev/hanghae_plus_react_seo/assets/84307361/1f81192b-37d8-4f6f-89db-cf53f7c0dcee)

- https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fhanghae-plus-react-seo.vercel.app%2F&crawltype=1
  ![image](https://github.com/gihwan-dev/hanghae_plus_react_seo/assets/84307361/4aa608f2-b04a-4d8e-8ea0-7c1c45f29b52)

### 개선점
- 동적으로 메타태그가 생성되는 것이 아닌 서버사이드 렌더링을 통해 정적으로 생성되어 메타태그 수집에 이상이 없도록 한다.
- 적절한 내용의 `h1` 태그를 포함 하여 `SEO`를 향상할 수 있다.
- 커스텀 404페이지를 추가한다.
- `title` 태그와 `meta 설명`에 주요 키워드를 포함시켜 서치 엔진 로봇이 웹 사이트 내용에 대해서 더 잘 분석할 수 있도록 한다.
