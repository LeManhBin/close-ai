import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messChange, setMessChange] = useState("")
  const [messData, setMessData] = useState([])
  const [mess, setMess] = useState("")
  const [messBot, setMessBot] = useState("Quặc Quặc Quặc Quặc Quặc Quặc Quặc Quặc Quặc")
  
  const [isSend, setIsSend] = useState(false)



  const handleSubmit = () => {
    let copy = [...messData];
    copy = [...copy, messChange];
    setMessData(
      copy
    )
    setIsSend(true)
    setMessChange("")
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      let copy = [...messData];
        copy = [...copy, messChange];
        setMessData(
          copy
        )
        setIsSend(true)
        setMessChange("")
    }
  }
  return (
    <div className="App">
        <div className='container'>
          <div className='mess-container'>
          {
            messData.map((chat, index) => {
              return(
                <div className='top' key={index}>
                    <div className='mess'>
                        <span><i className="fa-regular fa-user"></i></span>
                        <p>{chat}</p>
                    </div>
                    {
                      isSend && (
                        <div className='mess-bot'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKhQBKxeyppqf3NjPj6nD6CsGpun4uveKabnyBtObyzd_tEhnu5nJepdk_NdpjlUF9Ks&usqp=CAU'></img>
                            <div className="typing-demo">{messBot}</div>
                        </div>
                      )
                    }
                </div>
              )
            })
          }
          </div>
          <div className='bot'> 
              <input type="text" value={messChange} onKeyPress={handleKeyPress} onChange={(e) => setMessChange(e.target.value)}/>
              <button onClick={(e) => handleSubmit(e)}><i className="fa-regular fa-paper-plane"></i></button>
          </div>
        </div>
    </div>
  );
}

export default App;
