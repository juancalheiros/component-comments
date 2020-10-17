import React from 'react'
import ReactDOM from 'react-dom'

import faker from 'faker'

import Comments from './comments'

class App extends React.Component {
    render(){
        return( 
            <div>
                <Comments 
                    name={faker.name.firstName()} 
                    weekday={faker.date.weekday()}
                    hour='8:00 PM' 
                    mensage="Hello !" 
                    image={faker.image.avatar()} 
                />

                <Comments 
                    name={faker.name.firstName()} 
                    weekday={faker.date.weekday()}
                    hour='6:20 AM' 
                    mensage="Bye Bye !"
                    image={faker.image.avatar()}
                />
                
                <Comments 
                    name={faker.name.firstName()} 
                    weekday={faker.date.weekday()}
                    hour='10:00 PM' 
                    mensage="Good night people!!!"
                    image={faker.image.avatar()}
                />
                
            </div>  
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
 