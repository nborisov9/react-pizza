import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'
import { Home, Cart } from './pages'



const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
          <Route path="/" component={ Home } exact />
          <Route path="/cart" component={ Cart } exact />
      </div>
    </div>
  )
}

export default App




// ====================================================================================================================
// example use re for Class
// // получает атуальные данные из redux
// // СОЗДАСТ props в App.js
// // нужен для того, чтобы из всего хранилища вызывать конкретные данные и пропихнуть их в props нашего App.js
//   const mapStateToProps = state => {
//     return {
//       items: state.pizzas.items
//     }
//   }


// // нужен для того, чтобы вставить в props компонента App.js определенные ActionCreators
// // теперь в получении данных из axios могу просто прописать: this.props.setPizzas(data.pizzas)
//   const mapDispatchToProps = dispatch => {
//     return {
//       setPizzas: items => dispatch(setPizzas(items)) // в props создается ключ: setPizzas, который содержит callback ф-цию по получению данных через dispatch->ActionCreator
//     }
//   }


// // connect - HOC (компонент, который оборачивает наш компонент логикой redux)
// // каждый раз, когда redux изменяется component будет производить rerender нашего App.js
// export default connect(mapStateToProps, mapDispatchToProps)(App);