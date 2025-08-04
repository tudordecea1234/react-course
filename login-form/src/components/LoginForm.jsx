import './LoginForm.css';

export function LoginForm({showPassword, setShowPassword}) {

      function handleShowPassword(){
        setShowPassword(showPassword
                        ? false 
                        : true
                      )
      }

      return (<div>
        <div>
          <input placeholder="Email"></input>
        </div>
        <div>
          <input placeholder="Password" type={showPassword ? 'text' : 'Password'}></input>
          <button className="show-button" onClick={handleShowPassword}>Show</button>
        </div>
        <div>
          <button className="login-signup-button">Login</button>
          <button className="login-signup-button">Sign up</button>
        </div>
      </div>)
    }