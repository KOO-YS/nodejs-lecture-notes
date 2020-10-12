## Node.js
 
 - 서버 기반 자바 스크립트
 - 이벤트 기반
 - 비동기
 - non - blocking
 - single thread, 가볍다
 - 

#### Node.js 싱글 스레드
 - locking이란 컨셉이 없고, 이벤트의 결과를 콜백으로 받는다

##### *baidu push?*


##### Node의 적절한 활용
- REST + JSON APTs
- 싱글페이지 웹앱
- 실시간 웹앱
- 빠른 프로토타입
- I/O 프로세싱

##### Node의 부적절한 활용
- CPU 부하걸리는 작업
- 멀티 스레드 앱
- 큰 데이터 연산
- 복잡한 비즈니스 로직

---

### Non - blocking

- 클라이언트와 서버의 관계
> 동기 : 클라이언트가 서버에게 보낸 요청의 결과를 기다림
> 비동기 : 클라이언트가 서버에게 보낸 요청을 보내놓고 다른 작업을 처리할 수 있음

- 유저 레벨과 커널 레벨로 구분
> blocking 
> non blocking

##### libuv

##### NPM 
- NPM을 통해 다양한 버전의 nodejs를 사용할 수 있다
- java의 maven 처럼 library를 가져와 사용할 수 있다

실습 순서 
1. helloConsole.js
2. helloProcess.js
3. math.js & app.js
4. npm
    ##### node 시작
    ``` node init ```
5. dependency install
    ```npm install colors```
    helloColors.js
6. eventEmmiter
    - 노드 클래스의 최상위 클래스이다
7. stream
    - pipe?
8. socket