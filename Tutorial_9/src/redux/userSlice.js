import {createSlice} from "@reduxjs/toolkit"

const initialState={// Burada yazmış olduğumuz kullanıcıdan çekmek istediğimiz verilerin stateleridir.
  email: null,
  password: null,
  isLoading: false,
  isAuth:false,//backend tarafını boşverip kendimiz test amaçlı bir kullanıcı oluşturduk
  users:{
    userEmail:"test@test.com",
    userPassword:"12345",
  }
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setEmail:(state,action)=>{//statte keyword gibidir. action ise valueye benzer diyebiliriz.
      //istenilirse kullanıcının inputu ilemlere tabi tuttulabilir.
      const lowerCaseEmail= action.payload.toLowerCase()
      state.email = lowerCaseEmail
    },
    setPassword:(state,action)=>{
      state.password = action.payload
    },
    setIsLoading:(state,action)=>{
      state.isLoading = action.payload
    },
    //test işlemimizin devamı
    setLogin:(state) =>{
      if((state.email===state.users.userEmail) && (state.password === state.users.userPassword)){
        console.log(true)
        state.isAuth = true
      }else{
        console.log(false)
        state.isAuth = false
      }
    }
  }
})
export const { setEmail,setPassword,setIsLoading,setLogin} = userSlice.actions;
export default userSlice.reducer;