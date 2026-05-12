import { Button } from "./button"

function App(){
  const willDelete=()=>{console.log("deleted")}
  const handleAlert=()=>alert("warning")

  return (
    <>

      <h1>Buttons with different functions</h1>
      <Button
      label="delete"
      onClick={willDelete}
      />
      <br />
      <br />
      <Button
      label="alert"
      onClick={handleAlert}
      />

    </>
  )
}

export default App
