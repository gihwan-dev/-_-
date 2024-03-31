# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅
- `npm install` 커맨드를 실행하여 노드 모듈을 설치합니다.
- `npm run start` 를 통해 리액트 앱을 실행시키고 http:localhost:3000 을 통해 접속합니다.

## SEO 스코어 분석
- https://smallseotools.com/website-seo-score-checker/
![image](https://github.com/gihwan-dev/hanghae_plus_react_seo/assets/84307361/1f81192b-37d8-4f6f-89db-cf53f7c0dcee)

- https://freetools.seobility.net/en/seocheck/check?url=https%3A%2F%2Fhanghae-plus-react-seo.vercel.app%2F&crawltype=1
![image](https://github.com/gihwan-dev/hanghae_plus_react_seo/assets/84307361/4aa608f2-b04a-4d8e-8ea0-7c1c45f29b52)


### 개선점
`SEO` 체크 사이트를 통한 `SEO` 체크에서 타이틀, 메타 등의 태그가 없다는 결과를 받았습니다. 아마 `Helmet` 라이브러리를 통해 동적으로 태그를 생성하기 때문에 수집에 문제가 있다고 생각됩니다. 그렇기에 필요한 작업은 다음과 같다고 판단됩니다:
- 동적으로 메타태그가 생성되는 것이 아닌 SSR를 사용해 정적으로 생성되어 메타태그 수집에 이상이 없도록 한다.
- 적절한 내용의 `h1` 태그를 포함 하여 `SEO`를 향상할 수 있다.
- 커스텀 404페이지를 추가한다.
- 주요 키워드를 포함시켜 서치 엔진 로봇이 웹 사이트 내용에 대해서 더 잘 분석할 수 있도록 한다.
