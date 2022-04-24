import React ,{useState , useEffect } from "react"; // useState is one of Hook
import NameListItem from "./NameListItem";


function NameList() {

  const [loadData,setLoadData] = useState(new Date());
  const [nameList , setNameList] = useState([
    {
      id:1,
      name: { title: "mr", first: "Brad", last: "gibson"},
      location: { city: "kilcoole"},
      email: "brad.gibson@example.com",
      dob: { date: "1993-07-20T09:44:18.674Z", age: 26 },
      picture: {medium: "https://randomuser.me/api/portraits/med/men/75.jpg"},
    },
    {
      id:2,
      name: { title: "mrs", first: "Clara", last: "Medez"},
      location: { city: "Guadalajara" },
      email: "clara.mendez@example.com",
      dob: { date:"1968-11-15T04:11:49.834Z",age:54 },
      picture: { medium: "https://randomuser.me/api/portraits/med/women/18.jpg"},
    },
    {
      id:3,
      name: { title: "Ms", first: "Roberto", last: "Carrasco"},
      location: { city: "Alicante"},
      email: "roberto.aguilar@example.com",
      dob: { date:"1981-07-27T13:17:28.212Z",age:41},
      picture: { medium: "https://randomuser.me/api/portraits/med/men/51.jpg"},
    },
]);

useEffect(() => {
  fetch("https://randomuser.me/api")
  .then((response) =>{
    return response.json();
  }).then((responseData) => {
    setNameList(nameList => [...nameList , responseData.results[0]]);
  })
} , [loadData]);


const nameListComponent = () => {
  return nameList.map((aName) => {
     return(
      <NameListItem
        key={aName.id}
        name={aName.name.first+" "+aName.name.last}
        city={aName.location.city}
        Email={aName.email}
        birthday={aName.dob.date}
        avatar={aName.picture.medium}
        />
     );
  });
};

const addUserHandler = () => {
  setLoadData(new Date());
};

  return (
    <React.Fragment>
      <div class="container mt-4" >
        <button class="btn btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
        <ul class="list-group"> {nameListComponent()} </ul>
      </div>
    </React.Fragment>
  );
}  

export default NameList;

/*const newUser = {
  id: new Date(),
  name: { title: "Ms", first: "Irene", last: "Carrasco"},
  location: { city: "Alicante"},
  email: "irene.carrasco@example.com",
  dob: { date:"1981-07-27T13:17:28.212Z",age:41},
  picture: { medium: "https://randomuser.me/api/portraits/med/women/84.jpg"},
};

//setNameList(nameList=> nameList.concat(newUser));
setNameList((nameList) => [...nameList , newUser]);*/