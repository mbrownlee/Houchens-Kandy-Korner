const remoteURL = "http://localhost:5002";

export default {
    get(id) {
      return fetch(`${remoteURL}/products/${id}`).then((result) =>
        result.json()
      );
    },
    getAll() {
      return fetch(`${remoteURL}/products`).then((result) => result.json());
    },
    getWithProductType(id) {
      return fetch(
        `${remoteURL}/products/${id}?_embed=productTypes`
      ).then((result) => result.json());
    },
    update(editedProduct) {
      return fetch(`${remoteURL}/products/${editedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProduct),
      }).then((result) => result.json());
    }
}