import React, { useState } from 'react';

export default function CheckAttendance() {
    const [inputStdNumber, setInputStdNumber] = useState('');
    const [inputAttCode, setInputAttCode] = useState('');
    const [stdNumberValid, setStdNumberValid] = useState(false);
    const [attCodeValid, setAttCodeValid] = useState(false);

    const [buttonClicked, setButtonClicked] = useState(false);
  
    const handleStdNumber = (event) => {
      setInputStdNumber(event.target.value);
    }
  
    const handleAttCode = (event) => {
      setInputAttCode(event.target.value);
    }
  
  
    const checkStdNumber = () => {
      setStdNumberValid(true); //
      return true; //
    };
  
    const checkAttCode = () => {
      setAttCodeValid(true); //
      return true; //
    };
  
    const onClickConfirmButton = () => {
      if(checkStdNumber()  && checkAttCode()) {
        alert('로그인에 성공했습니다.');
      } 
      else {
        alert("등록되지 않은 회원입니다.");
        setButtonClicked(true);
      }
    }
  
    return (
      <div className="checkInput">
        <div className="page">
          <div className="titleDiv">
            학번과 출석코드를
            <br />
            입력해주세요
          </div>
  
          <div className="contentDiv">
            <div className="inputTitle">학번</div>
            <div
              className="inputDiv"
            >
              <input
                className="input"
                type="text"
                placeholder="ex) 20231515"
                value={inputStdNumber}
                onChange={handleStdNumber}
              />
            </div>
            <div className="errorMessageDiv">
              {!stdNumberValid && buttonClicked && (
                <div>부원으로 등록되지 않는 학번입니다.</div>
              )}
            </div>
  
            <div style={{ marginTop: "26px" }} className="inputTitle">
              출석 코드
            </div>
            <div className="inputDiv">
              <input
                className="input"
                type="password"
                placeholder="대소문자 고려하여 입력"
                value={inputAttCode}
                onChange={handleAttCode}
              />
            </div>
            <div className="errorMessageDiv">
              {!attCodeValid && buttonClicked && (
                <div>잘못된 출석 코드입니다.</div>
              )}
            </div>
          </div>
  
          <div>
            <button onClick={onClickConfirmButton} className="bottomButton">
              제출
            </button>
          </div>
        </div>
      </div>
  
      
    );
  }
  
