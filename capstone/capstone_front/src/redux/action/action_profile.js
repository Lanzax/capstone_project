
export const RECIPE = "RECIPE";

export const recipe = (recipe) => ({

    type: RECIPE,
    payload: recipe

})




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