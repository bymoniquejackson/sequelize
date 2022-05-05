const yargs = require("yargs")
const { sequelize } = require("./db/connection");
//import crud functions
const { addMovie, listMovies } = require("./Movie/movieMethods")



const app = async (yarhsObj) => {
    try {
        await sequelize.sync();
        if (yarhsObj.add) {
            //add movie to db
            await addMovie ({title: yarhsObj.title, actor: yarhsObj.actor});
        }else if (yarhsObj.list) {
            //list all movies 
            console.log(await listMovies());
        } else if (yarhsObj.update){
            //update one movie
        } else if (yarhsObj.delete){
            //delete one movie 
        }else {
            console.log("Incorrect command")
        }

    }catch(error) {
        console.log(error)
    }
}

app(yargs.argv);