const Movie = require ("./movieTable")
const Actor = require ("./actorTable")





exports.addActor = async (actorObj) => {
    try {
        await Actor.create(actorObj);
    } catch (error) {
        console.log(error)
    }
}


exports.listMovie = async () => {
    try {
        return await Actor.findAll();
    } catch (error) {
            console.log(error)
        }
    }


    exports.updateActor = async () => {
        try {
            await Actor.update(
            {name: actorObj.actor},
            {where: {title: actorObj.title}}
            );



        exports.deleteActor = async (actorObj) => {
            await Actor.destroy({
                where: {title: Actor}
                })
            }


        } catch (error) {
                console.log(error)
            }
        }
    

    //rework