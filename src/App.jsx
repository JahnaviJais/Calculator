import { useState } from "react"


function App() {
 const [inputVal, setInputVal] = useState("");

 function display(value){
  setInputVal(inputVal+value)
 }

 function calculate(){
  let ans = eval(inputVal)
  setInputVal(ans)
 }

 function clear(){
  setInputVal("");
 }

 return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
     
      <form className="bg-white p-6 rounded-2xl shadow-lg w-72">
        <input
          type="text"
          className="w-full mb-4 p-3 text-right text-xl border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputVal}
          readOnly
        />
        <div className="grid grid-cols-4 gap-3 text-center text-lg font-semibold text-gray-800">
          <span className="bg-red-200 py-2 rounded cursor-pointer hover:bg-red-300 col-span-2" onClick={()=> clear()}>C</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("%")}>%</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("*")}>*</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("7")}>7</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("8")}>8</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("9")}>9</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("/")}>/</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("4")}>4</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("5")}>5</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("6")}>6</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("+")}>+</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("1")}>1</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("2")}>2</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("3")}>3</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("-")}>-</span> 
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display(".")}>.</span>
          <span className="bg-blue-100 py-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => display("0")}>0</span>
          <span className="bg-red-300 col-span-2 py-2 rounded cursor-pointer hover:bg-red-400" onClick={() => calculate()}>=</span>
        </div>
      </form>
    </div>
  </>
)

}

export default App
