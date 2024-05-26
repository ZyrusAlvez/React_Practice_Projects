import './App.css'

export default function App() {
  const menu = ["Appetizers", "Entrees", "Desserts", "Beverages", "About"];

  return (
    <div className='main-div'>
      <div className='title'>CSS MENU</div>
      {menu.map((e, i) => <div className={i === menu.length - 1 ? "last" : "menu"} onClick={() =>alert("clicked")}>{e}</div>)}
    </div>
  )
}

