import { useEffect, useState } from "react";
import SearchField from "./components/serachField";

/* 
Get value and insert on 0 index

*/

function App() {
  let [inputValue, setInputValue] = useState("");
  let [userNames, setUserNames] = useState<string[]>([]);
  let [buttonLabel, setButtonLabel] = useState("Add User");
  let [updateNameIndex, setUpdateNameIndex] = useState(0);

  let addUsersNames = () => {
    if (buttonLabel === "Add User") {
      setUserNames([inputValue, ...userNames]);
      setInputValue("");
    } else {
      let cloneName: string[] = [];
      userNames.filter((data, index) => {
        if (index === updateNameIndex) data = inputValue;
        cloneName = [...cloneName, data];
      });
      setUserNames(cloneName);
      setInputValue("");
    }
  };
  let deleteUsersName = (indexNumber: number) => {
    let cloneUserName: string[] = [];
    userNames.filter((data, index) => {
      if (index !== indexNumber) {
        cloneUserName.unshift(data);
      }
    });
    return cloneUserName;
  };

  useEffect(() => {
    console.log(userNames, "===>>");
  }, [userNames]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchField
          buttonLabel={buttonLabel}
          placeHolder="Search Name"
          inputValue={inputValue}
          onClickHandler={addUsersNames}
          onChangeHandler={(value) => {
            setInputValue(value);
          }}
        />
      </header>
      {userNames.length > 0 && (
        <ul>
          {userNames.map((names, index) => (
            <li key={names + index}>
              {names}
              <button
                onClick={() => {
                  setInputValue(names);
                  setButtonLabel("Update Name");
                  setUpdateNameIndex(index);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  setUserNames(deleteUsersName(index));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
