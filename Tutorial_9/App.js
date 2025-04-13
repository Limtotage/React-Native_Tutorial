
import RootNavigation from"./src/Navigation/RootNavigation"
import {Provider} from "react-redux"
import{ store} from "./src/redux/store"
/* import ettiğimiz store yapısının ismi store olduğu için süslü parantez içerisindeki değişkende store olmaktadır. */
const App = () => {
  return (
    <Provider store={store}> 
    
      <RootNavigation/>
    </Provider>
  );
};
export default App;
