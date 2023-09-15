import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName(Human) {
    // TODO: Implement this method
   return `${fname} ${lname}`
  }
}

// TODO: Human.init()
Human.init(
  {
  human_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  fname: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  lname: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  },
  email: {
    type: DataTypes.VARCHAR,
    allowNull: false,
  }
},
{
  modelName: 'human',
  sequelize: db,
},
);

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

// TODO: Animal.init()
Animal.init({
  animal_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.VARCHAR(),
    allowNull: false,
  },
  species: {
    type: DataTypes.VARCHAR(),
    allowNull: false,
  },
  birth_year: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{
  modelName: 'animal',
  sequelize: db,
})

// TODO: Define Relationship
Human.hasMany(Animal, { foreignKey: 'human_id' });
Animal.belongsTo(Human, { foreignKey: 'human_id'});


export default db;
