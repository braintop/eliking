function App() {

  //phae 1 declrae vars & consts 
  let firstName = "John"
  let array = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      city: "New York"
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 21,
      city: "Los Angeles"
    },
    {
        firstName: "Jim",
        lastName: "Beam",
        age: 22,
        city: "Chicago"
    }
  ]

  let newArray = array.map((item) => {
      return <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h2>{item.firstName} {item.lastName}</h2>
        <p>Age: {item.age}</p>
        <p>City: {item.city}</p>
      </div>
    })

  //phase 2 functions 

  function sayHello() {
    console.log("Hello")
    alert("Hello")
  }
  //phase 3 return JSX
  return (
    <>
      <h1>Hello World</h1>
      <p>My name is {firstName}</p>
      <button onClick={sayHello}>Click me</button>
      {newArray}
    </>
  )
}
export default App

