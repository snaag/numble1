## Deploy url
https://numble1-1vmu.vercel.app/

## Review [here](https://snaag.oopy.io/5b3798cf-87c1-4633-8b1a-21ee3247909f)
- 중요하게 생각했던 점
    - 간단한 부분에서 신경을 썼다.
        - (비록 적용은 못했지만) 무한스크롤을 위한 throttle 을 이해하고 직접 구현했다. 겸사겸사 debounce 도 같이 구현했다.
        - 게임을 구현할 때 random 을 사용하지 않고 구현하려고 고민했다.
    - 사용자가 사용할 때 자연스럽게 느껴지도록 했다.
        - 다이어리 상세 및 수정 화면에서 잘못된 주소 (a1z2) 로 들어오는 경우에 대한 고려를 했다.
        - 사용자의 액션에 대한 피드백을 alert 로 제공했다.
- 좋았던 점
    - Next.js 에 대해 막연하게 생각하고 있었는데 이번 기회를 통해 해서 공부할 수 있었다.
- 아쉬웠던 점
    - typescript
        - typescript 설정(tsconfig) 을 잘 모르고 있었다.
        - typescript 로 만들어 놓고, 정작 type 을 거의 사용하지 않았었다.
    - style
        - style 코드를 깔끔하게 작성하지 못했다.
        
## I used
- Next.js
- Graphql 요청을 위한 Apollo-client

## How to run

```bash
npm run dev
# or
yarn dev
```

