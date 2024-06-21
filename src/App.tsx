
import './App.scss'
import Header from './components/header'
import Footer from './components/footer'

function App() {

  const senddata = () => {
    {
      const contains: any = document.querySelector(".container")
      const dataadd: any = document.querySelector(".adding")
      const div = document.createElement("div")
      div.classList.add("Dta")
      const data = document.createElement("div")
      div.classList.add("DATA")
      const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const det =document.createElement("div")
        det.classList.add("dele")
      const deleted = document.createElement("button")
      deleted.innerHTML="delete"
      const par = dataadd.value
      det.append(deleted)
      data.append(checkbox)
      data.append(par)
      div.append(data)
      div.append(det)
      contains.append(div)
    }

  }
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
  )
}

export default App
