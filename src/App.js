import { useEffect, useState } from "react";
import "./App.css";
import PopUp from "./component/popup";
import axios from "axios";
import LoadingState from "./component/loading-state";

function App() {
  const [show, setShow] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [newCurrency, setNewCurrency] = useState("USD");
  const [newSelected, setNewSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ rate, setRate ] =useState(null)

  useEffect(() => {
    setIsLoading(true)
    const url =
      "https://exchange-rates.abstractapi.com/v1/live/?api_key=2014879605254f7b85842a13515cb144&base=" +
      baseCurrency +
      "&target=" +
      newCurrency;
    axios
      .get(url)
      .then((response) => {
        setRate(response.data.exchange_rates[
          Object.keys(response.data.exchange_rates)[0]
        ])
      })
      .catch(() => console.log("something's wrong"))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [baseCurrency, newCurrency]);

  const selectCurrency = (e) => {
    const btnClass = e.target.className;
    setShow(true);
    if (btnClass.includes("new-btn")) {
      setNewSelected(true);
    } else {
      setNewSelected(false);
    }
  };
  const closePopUp = () => {
    setShow(false);
  };
  const changeCurrency = (e, newSelect) => {
    if (newSelect) {
      if (e.target.outerText === baseCurrency) {
        alert("Conversion to the same currency is not allowed");
      } else {
        setNewCurrency(e.target.outerText);
        setShow(false);
      }
    } else {
      if (e.target.outerText === newCurrency) {
        alert("Conversion to the same currency is not allowed");
      } else {
        setBaseCurrency(e.target.outerText);
        setShow(false);
      }
    }
  };
  const getValue = (e) => {
    // const rate = localStorage.getItem("rate");
    const base = document.querySelector(".base");
    const newVal = document.querySelector(".newVal");
    if (base.innerText === "0") {
      base.innerText = e.target.outerText;
    } else {
      base.innerText += e.target.outerText;
    }
    const value = Number(base.innerText) * rate;
    newVal.innerText = value.toFixed(3);
  };
  const erase = () => {
    // const rate = localStorage.getItem("rate");
    const base = document.querySelector(".base");
    const newVal = document.querySelector(".newVal");
    if (base.innerText !== "0") {
      base.innerText = base.innerText.slice(0, -1);
      const value = Number(base.innerText) * rate;
      newVal.innerText = value.toFixed(3);
    }
    if (base.innerText === "") {
      base.innerText = "0";
      newVal.innerText = "0";
    }
  };
  const clearValue = () => {
    const base = document.querySelector(".base");
    const newVal = document.querySelector(".newVal");
    base.innerText = "0";
    newVal.innerText = "0";
  };

  return (
    <div className="App h-full">
      {isLoading ? (
        <LoadingState />
      ) : (
        <div className="flex justify-center h-full">
          <div className="h-full lg:w-1/2 sm:w-3/4 w-full ">
            <div className="h-2/5 bg-darkWhite text-dark relative">
              {show && (
                <PopUp
                  close={closePopUp}
                  changeCurrency={changeCurrency}
                  newSelected={newSelected}
                />
              )}
              <div className="absolute bottom-0 w-full px-5 sm:px-10 h-3/4">
                <div className="flex justify-between items-center h-1/2">
                  <button
                    className="text-dark font-bold sm:text-lg text-sm"
                    onClick={(e) => selectCurrency(e)}
                  >
                    {baseCurrency}
                  </button>
                  <p className="text-xl sm:text-3xl md:text-4xl base">0</p>
                </div>

                <div className="flex justify-between items-center h-1/2">
                  <button
                    className="text-dark font-bold sm:text-lg text-sm new-btn"
                    onClick={(e) => selectCurrency(e)}
                  >
                    {newCurrency}
                  </button>
                  <p className="text-xl sm:text-3xl md:text-4xl newVal">0</p>
                </div>
              </div>
            </div>
            <div className=" bg-blue h-3/5 text-dark grid grid-cols-3">
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                9
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                8
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                7
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                6
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                5
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                4
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                3
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                2
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                1
              </button>
              <button
                onClick={erase}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                C
              </button>
              <button
                onClick={(e) => getValue(e)}
                className="w-full h-full hover:bg-white hover:bg-opacity-20"
              >
                0
              </button>
              <button
                onClick={clearValue}
                className="w-full h-full text-darkBlue hover:bg-white hover:bg-opacity-20"
              >
                AC
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
