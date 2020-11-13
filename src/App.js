import React from 'react'
import { Route } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux' // объеденит App.js с Redux

import store from './redux/store'
import { setPizzas } from './redux/actions/pizzas'
import { Header } from './components'
import { Home, Cart } from './pages';





// function App() {
 
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => {
//         setPizzas(data.pizzas)
//       })
//   }, [])

//   return 
// }



class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        store.dispatch(setPizzas(data.pizzas))
      })
  }


  render() {
      return (
        <div className="wrapper">
          <Header />
          <div className="content">
              <Route path="/" render={ () => <Home items={ this.props.items } /> } exact />
              <Route path="/cart" render={ () => <Cart /> } exact />
          </div>
        </div>
      );
  }
}


// получает атуальные данные из redux
// СОЗДАСТ props в App.js
// нужен для того, чтобы из всего хранилища вызывать конкретные данные и пропихнуть их в props нашего App.js
  const mapStateToProps = state => {
    return {
      items: state.pizzas.items
    }
  }


// нужен для того, чтобы вставить в props компонента App.js определенные ActionCreators
// теперь в получении данных из axios могу просто прописать: this.props.setPizzas(data.pizzas)
  const mapDispatchToProps = dispatch => {
    return {
      setPizzas: items => dispatch(setPizzas(items)) // в props создается ключ: setPizzas, который содержит callback ф-цию по получению данных через dispatch->ActionCreator
    }
  }


// conect - HOC (компонент, который оборачивает наш компонент логикой redux)
// каждый раз, когда redux изменяется component будет производить rerender нашего App.js
export default connect(mapStateToProps, mapDispatchToProps)(App);