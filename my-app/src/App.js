import {useState} from "react";

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(!value){
      return alert('내용을 입력하세요');
    }
    setList([...list, value.trim()])
    setValue('')
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}/>
        <button>등록</button>
      </form>
      <ul>
        {
          list.map((item ,index) =>(
              <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
