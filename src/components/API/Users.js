import axios from "axios";

const API_BASE_URL = "https://randomuser.me/api/";

const GetUserList = async () => {
  let userList = [];

  do {
    const {
      data: {
        info: { seed },
        results: { ...rest },
      },
    } = await axios.get(
      `${API_BASE_URL}?inc=picture,name,dob,location,email,phone,login`
    );

    let userTimezone = parseFloat(
      rest[0].location.timezone.offset.replace(":", ".")
    );

    if (rest[0].dob.age >= 18 && userTimezone >= -1.0 && userTimezone <= 1.0) {
      let userObject = {
        id: seed,
        ...rest[0],
      };
      userList.push(userObject);
    }
  } while (userList.length < 15);

  return userList;
};

export { GetUserList };
