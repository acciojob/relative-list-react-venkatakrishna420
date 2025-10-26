import React from 'react'

const App = () => {
  return (
    <div id="main">
    <h1>Relative List</h1>
      <Relatives />
               {/* Do not remove the main div */}
    </div>
  )
}

export default App
function Relatives(){
    const relatives = ['Alice', 'Bob', 'Charlie', 'Diana','venkat'];
    
    return(
        <div>
            <ol key="relativeList">
                {relatives.map((relatives,index)=>(
                    <li key={`relativeListItem${index + 1}`}>{relatives}</li>
                ))}
               
            </ol>
        </div>
       )
    }
