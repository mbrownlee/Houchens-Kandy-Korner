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
        `${remoteURL}/products/${id}?_expand=productType`
      ).then((result) => result.json());
    },
    getByProductTypeId(productTypeId) {
      return fetch(
        `${remoteURL}/products?productTypeId=${productTypeId}`).then((result) => result.json())
      
    },
 
    post(newProduct) {
      return fetch(`${remoteURL}/products`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newProduct)
      }).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/products/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
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
