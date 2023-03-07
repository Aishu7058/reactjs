import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <form>
        <h3 className={StyleSheet.tit}>All Components</h3>
        <input type="text" placeholder="Enter Name"/><br></br>
        <input type="text" placeholder="Enter Mail ID"/><br></br>
        <input type="text" placeholder="Enter Mobile Number"/><br></br>
        <input type="button" value="Register" className="but"/><br></br>

        <p>Open Google:  
        <a href="https://www.google.com">Google</a></p><br></br>

        <table id="tb" border="1">
          <tr>
          <th>Name</th>
            <th>Roll No</th>
          </tr>
            
            <tr>
              <td>AY</td>
              <td>A-76</td>
            </tr>
        </table><br></br><br></br>

        <p>Ordered list</p>
        <ol>
          <li>One</li>
          <li>Two</li>
        </ol>

        <p>Unordered list</p>
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>

        <img src="logo.svg" alt="A"></img>
        </form>

      </header>
    </div>
  );
}

export default App;
