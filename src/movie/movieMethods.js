const Movie = require ("./movieTable")





exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
}


exports.listMovie = async (movieObj) => {
    try {
        return await Movie.findAll(movieObj);
    } catch (error) {
            console.log(error)
        }
    }


    exports.updateMovie = async (movieObj) => {
        try {
            await Movie.update(
            {title: movieObj.title, actor: movieObj.actor},
            {where: {title: movieObj.title}}
            );
        } catch (error) {
                console.log(error)
            }
        }
    
        exports.destroyMovie = async (movieObj) => {
            await Movie.destroy({
                where: {title: movieObj.title}
            })
        }