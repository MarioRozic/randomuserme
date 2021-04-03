import axios from "axios";

const API_BASE_URL = "https://randomuser.me/api/";

const NUMBER_OF_USERS = 15;

const GetUserList = async () => {
  let userList = [];

  // readjust app call becuse of bad API responses
  // do {
  //   const {
  //     data: {
  //       info: { seed },
  //       results: { ...rest },
  //     },
  //   } = await axios.get(
  //     `${API_BASE_URL}?inc=picture,name,dob,location,email,phone,login`
  //   );

  //   let userTimezone = parseFloat(
  //     rest[0].location.timezone.offset.replace(":", ".")
  //   );

  //   if (rest[0].dob.age >= 18 && userTimezone >= -1.0 && userTimezone <= 1.0) {
  //     let userObject = {
  //       id: seed,
  //       ...rest[0],
  //     };
  //     userList.push(userObject);
  //   }
  // } while (userList.length < 15);

  do {
    const { data } = await axios.get(
      `${API_BASE_URL}?inc=id,picture,name,dob,location,email,phone,login&results=150&seed=rocketmario`
    );
    data.results.forEach((user) => {
      let userTimezone = parseFloat(
        user.location.timezone.offset.replace(":", ".")
      );

      if (user.dob.age >= 18 && userTimezone >= -1.0 && userTimezone <= 1.0) {
        let userObject = {
          uuid: user.login.uuid,
          ...user,
        };

        if (userList.length < NUMBER_OF_USERS) userList.push(userObject);
      }
    });
  } while (userList.length < NUMBER_OF_USERS);

  return userList;
};

const GetUser = async (id) => {
  // readjust app call becuse of bad API responses
  // const {
  //   data: {
  //     info: { seed },
  //     results: { ...rest },
  //   },
  // } = await axios.get(
  //   `${API_BASE_URL}?inc=picture,name,dob,location,email,phone,login&seed=${id}`
  // );

  // let userObject = {
  //   id: seed,
  //   ...rest[0],
  // };

  const { data } = await axios.get(
    `${API_BASE_URL}?inc=id,picture,name,dob,location,email,phone,login&results=150&seed=rocketmario`
  );

  let userObject = data.results.filter((user) => user.login.uuid === id);

  return userObject[0];
};

export { GetUserList, GetUser };
