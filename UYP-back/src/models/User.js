const { INTEGER, STRING,BOOLEAN } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: STRING,
        allowNull: false,
      },
      password: {
        type: STRING,
        allowNull: false,
      },
      email: {
        type: STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      rol: {
        type: INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 3,
        },
      },
      image: {
        type: STRING,
        allowNull: true,
      },
      status: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      nombre: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      cuit: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      apellido: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      sexo: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      documento: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      linea_de_programa: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      institucion_de_inscripcion: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      fecha_de_nacimiento: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      provincia: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      nacionalidad: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      municipio: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
     localidad: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      calle: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      codigo_postal: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      telefono: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      barrio: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      },
      hijos_menores: {
        type: STRING,
        allowNull: false,
        defaultValue: true
      }
    },
    {
      timestamps: false,
    }
  );
};