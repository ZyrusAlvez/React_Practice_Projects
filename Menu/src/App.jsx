import './App.css'

export default function App() {
  const menu = ["Appetizers", "Entrees", "Desserts", "Beverages", "About"];

  return (
    <div className='main-div'>
      <div className='title'>CSS MENU</div>
      <ul class="list">
        {menu.map((e) => {
        return <li className="item" onClick={() => alert("clicked")}>{e}</li>})}
      </ul>
    </div>
  )
}

