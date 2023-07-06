
export const RECIPE = "RECIPE";
export const CATEGORY ="CATEGORY";
export const LOGIN ="LOGIN"


export const recipe = (recipe) => ({

    type: RECIPE,
    payload: recipe

})
export const categoria = (categoria) => ({

    type: CATEGORY,
    payload: categoria

})
export const login = (login) => ({

    type: LOGIN,
    payload: login

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
                dispatch(recipe(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}

export const getAllRecipe = (autentication) => {


    return async (dispatch, getState) => {

        try {

            const res = await fetch("http://localhost:8080/api/recipe", {
                headers: {
                    'Authorization': "Bearer " + autentication
                }
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(recipe(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }

}
export const loginFunction=(email)=>{
    return async (dispatch, getState) => {
        try {

            const res = await fetch("http://localhost:8080/api/auth/login", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(email)
            })
            if (res.ok) {

                const data = await res.json()
                dispatch(recipe(data))
                console.log(getState())
            } else {

                console.log("errore durante una richiesta")

            }

        } catch (error) {
            console.log(error)
        }

    }
}