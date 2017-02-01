module.exports = {  
	mongoServices: "mongodb://localhost:27017/aprofeServices",
    PORT: 9998,
  	TOKEN_SECRET: process.env.TOKEN_SECRET || "neotoken"
};
