class member {
    constructor(firstName,middleName,lastName,username,age,address,birthDate,email,password,educationalBackground,
      skills){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.username = username; // A unique user name for each user.
        this.age = age;
        this.address = address;   
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.educationalBackground = educationalBackground; // String discription for the user educationalBackground.
        this.skills = skills; // a String discription for the user Skills.
      };
  }
  class Admin extends member{
    constructor(firstName,middleName,lastName,username,age,address,birthDate,email,password,educationalBackground,
      skills,PendingTasks){
        super(firstName,middleName,lastName,username,age,address,birthDate,email,password,educationalBackground,
      skills);
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.address = address;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.educationalBackground = educationalBackground;
        this.skills = skills;
        this.PendingTasks = PendingTasks; // an Array of Tasks that contains the Tasks yet to approved or not by the Admin
      };
   
  }
  class normalUser extends member{
    constructor(firstName,middleName,lastName,username,age,address,birthDate,email,password,educationalBackground,
      skills,completedTasks,Tasks,MasterClasses){
        super(firstName,middleName,lastName,username,age,address,birthDate,email,password,educationalBackground,
      skills);
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.username = username;
        this.age = age;
        this.address = address;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.educationalBackground = educationalBackground;
        this.skills = skills;
        this.completedTask = completedTasks;  // An Array of completed tasks that the user completed.
        this.Tasks = Tasks;
        this.MasterClasses = MasterClasses; // an Array of masterClasses the user joined.
      };
  }
  module.exports = normalUser;
  module.exports = Admin;
