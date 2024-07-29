export async function request(url, method = "GET", data = {}) {
  switch (method) {
    case "GET":
      return await HandleGetRequest(url);
    case "POST":
      return await HandlePostRequest(url, data);
    default:
      console.log("Invalid HTTP method");
  }

  async function HandleGetRequest(url) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      return serialize(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function HandlePostRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}

function serialize(data) {

  let finalmappedData;
  if (Array.isArray(data)) {
    finalmappedData = data.map((datum) => {
      const mappedData = {};
      mappedData["postId"] = datum["id"];
      mappedData["userId"] = datum["userId"];
      mappedData["blogTitle"] = datum["title"];
      mappedData["blogDescription"] = datum["body"];
      return mappedData;
    });
  }
  else {
    finalmappedData = {
      id: data.id,
      userId: data.userId,
      blogTitle: data.title,
      blogDescription: data.body,
    }
  }
  return finalmappedData;
}
