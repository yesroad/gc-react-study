## React
### 상태관리, UI 를 위한 라이브러리

1. **state (상태)**
- 해당 컴포넌트 내부에서 사용할 수 있는 값
2. **props ->  properties (부모 -> 자식 넘겨주는 속성)**
- html tag -> 속성 attributes
- js -> 속성 properties

3. **v-dom**
- 객체를 이용해서 변경사항을 확인하고 화면을 변경된 내용만 랜더링한다

---
1. **useState**
- 초기값을 바로 넣어주는 방식
- 초기값으로 함수를 넣어주는방식
  - lazy initialization(지연 초기화)
  - 용량이 큰 파일을 읽어오는대에 이점이 있음
  - 초기값이 계산이 필요한 경우
3. **useRef**
4. **useContext**
5. **useEffect**