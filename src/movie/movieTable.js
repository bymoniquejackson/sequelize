const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		primaryKey: true,
	},
	actor: {
		type: DataTypes.STRING,
		defaultValue: "Not specified",
	},
});

const Actor = sequelize.define("Actor", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

Movie.hasOne(Actor);
Actor.belongsTo(Movie, {
	foreignKey: "title",
});



module.exports = Actor;
module.exports = Movie;