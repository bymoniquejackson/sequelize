const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports for CRUD functions
const {
	addMovie,
	deleteMovie,
	updateMovie,
	listMovies,
	findMovie,
} = require("./movie/movieMethods");

const app = async (yargsObj) => {
	try {
		await sequelize.sync();
		if (yargsObj.add) {
			



            
			await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
		} else if (yargsObj.list) {
			







			console.log(await listMovies());
		} else if (yargsObj.update) {
	






			await updateMovie({ title: yargsObj.title, actor: yargsObj.actor });
		} else if (yargsObj.delete) {








			await deleteMovie({ title: yargsObj.title });
		} else if (yargsObj.find) {









			await findMovie({ title: yargsObj.title });
		} else {
			console.log("Incorrect command");
		}
	} catch (error) {
		console.log(error);
	}
};

app(yargs.argv);