const Ingredients = ({ ingredients })=> {
    return(
       <div className="ingredientes">
            <p>Ingredientes:</p>
            <ul>
                {
                    ingredients.map((ingredient)=>{
                        return (
                            <li key={ingredient}> {ingredient}</li>
                        )
                    })
                }
            </ul>
       </div>
    )
}

export default Ingredients