const remoteURL = "http://localhost:5002";

export default {
    get(id) {
      return fetch(`${remoteURL}/productTypes/${id}`).then((result) =>
        result.json()
      );
    },
    getAll() {
      return fetch(`${remoteURL}/productTypes`).then((result) => result.json());
    },
  //   getWithEmployees(id) {
  //     return fetch(
  //       `${remoteURL}/locations/${id}?_embed=employees`
  //     ).then((result) => result.json());
  //   },
  //   update(editedLocation) {
  //     return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(editedLocation),
  //     }).then((data) => data.json());
    }