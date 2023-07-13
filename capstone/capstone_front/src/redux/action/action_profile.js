
export const RECIPE = "RECIPE";
export const CATEGORIA ="CATEGORIA";
export const LOGIN ="LOGIN"
export const REGISTER ="REGISTER"

export const recipe = (recipe) => ({

    type: RECIPE,
    payload: recipe

})
export const categoria = (categoria) => ({

    type: CATEGORIA,
    payload: categoria

})
export const login = (login) => ({

    type: LOGIN,
    payload: login

})
export const register = (register) => ({

    type: REGISTER,
    payload: register

})




export const getByCategory = (autentication,category) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("http://localhost:8080/api/recipe/category/"+category, {
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(categoria(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const getAllRecipe = () => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("http://localhost:8080/api/recipe")
            if (res.ok) {

                const data = await res.json()
                dispatch(recipe(data))
                console.log(getState())
            } else {
                window.alert("Credenziali non valide!!")
                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const loginFunction=(username,password)=>{
    return async (dispatch, getState) => {
        try {

            const res = await fetch("http://localhost:8080/api/auth/login", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({"username":username,"password":password })
            })
            if (res.ok) {
                const data = await res.json()
                dispatch(login(data))
                console.log(getState())
            } else {
                window.alert("Credenziali non valide")
                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }
}
export const registerFunction=(nome,username,email,password)=>{
    return async (dispatch, getState) => {
        try {

            const res = await fetch("http://localhost:8080/api/auth/register", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({"nome":nome,"username":username,"email":email,"password":password })
            })
            if (res.ok) {
                const data = await res.json()
                dispatch(register(data))
                console.log(getState())
            } else {
                window.alert("Registrazione non avvenuta")
                console.log("errore durante una richiesta")
            }
        } catch (error) {
            console.log(error)
        }

    }
}