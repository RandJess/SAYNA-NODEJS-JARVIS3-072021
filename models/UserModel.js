const UserShema= new mongoose({
    fistname: {
        type: DataTypes.STRING,
        required: true,
      },
      lastname: {
        type: DataTypes.STRING,
        required: true,
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Must be a valid email address",
          },
        },
      },
      sexe: {
        type: DataTypes.STRING,
        required: true,
      },
      role: {
        type: DataTypes.STRING,
        required: true,
      },
      dateNaissance: {
        type: DataTypes.DATEONLY,
        required: true,
      },
      password: {
        type: DataTypes.STRING,
        required: true,
      },
    //  {
    //   timestamps: true,
    //   createdAt: 'createdAt',
    //   updatedAt: false
    // }
})


//Once we define a model through mongoose.model('ModelName', mySchema), we can access it through the same function
//const MyModel = mongoose.model('ModelName', mySchema);


module.exports=UserShema