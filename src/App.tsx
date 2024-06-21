import './App.scss';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  const senddata = () => {
    const contains: any = document.querySelector(".container");
    const dataadd: any = document.querySelector(".adding");

    const div = document.createElement("div");
    div.classList.add("Dta");
    const dataDiv = document.createElement("div");
    dataDiv.classList.add("DATA");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    const span = document.createElement("span");
    span.textContent = dataadd.value;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

  
    deleteButton.addEventListener("click", () => {
      contains.removeChild(div); 
    });

    dataDiv.appendChild(checkbox);
    dataDiv.appendChild(span);
    div.appendChild(dataDiv);
    div.appendChild(deleteButton);
    contains.appendChild(div);
  };

  return (
    <>
      <div className="whole">
        <Header />
        <div className="add">
          <input type="checkbox" />
          <input type="text" className='adding' />
          <div className="sub">
            <button onClick={senddata}>Submit</button>
          </div>
        </div>
        <div className='entire'>
          <div className="container">
            
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;