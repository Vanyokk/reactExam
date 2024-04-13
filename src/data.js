
//var files;
const fetchData = async () => {
      const response = await fetch('https://646bafb47d3c1cae4ce42749.mockapi.io/products');
      const products = await response.json();
      return products;
};
export const products = await fetchData();