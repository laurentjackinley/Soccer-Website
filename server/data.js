require("dotenv").config();

const Sequelize = require("sequelize");
console.log(process.env.CONNECTION_STRING);
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  data: (req, res) => {
    sequelize
      .query(
        `

        create table countries(
            country_id serial primary number key,
            name varchar
        );

        )

        CREATE TABLE teams (
            team_id     SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            league VARCHAR
            country_id INT NOT NULL REFERENCES countries(country_id)
        )

        INSERT INTO COUNTRIES (name)
        values ('England'),
        ('Spain'),
        ('France'),
        ('Italy');

        INSERT INTO teams (name, league, country_id)
        VALUES ('Manchester United', 'Premiere League', 1)
        `
      )
      .then(() => {
        console.log("Database seeded");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
