const sourceJSON = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

class Data {
    static process(sourceJSON) {
      return new Promise((resolve, reject) => {
        const jsonObj = JSON.parse(sourceJSON);

        const getSortedArray = (data) => {
          return new Promise((resolve, reject) => {
            const sortedArray = data.sort((a, b) => a - b);
            resolve(sortedArray);
          });
        };

        const getSum = (arr) => {
          return arr.reduce((a, b) => a + b, 0);
        };

        const getOdd = (sortedArray) => {
          return new Promise((resolve, reject) => {
            const oddNumbers = sortedArray.filter((num) => num % 2 !== 0);
            console.log(oddNumbers);
            resolve(oddNumbers);
          });
        };

        const getEven = (sortedArray) => {
          return new Promise((resolve, reject) => {
            const evenNumbers = sortedArray.filter((num) => num % 2 === 0);
            console.log(evenNumbers);
            resolve(evenNumbers);
          });
        };

        const getBiggestSumArray = (oddArr, evenArr) => {
          return new Promise((resolve, reject) => {
            const oddSum = getSum(oddArr);
            const evenSum = getSum(evenArr);

            resolve(oddSum > evenSum ? oddArr : evenArr);
          });
        };

        getSortedArray(jsonObj.data)
          .then((sortedArray) => {
            return Promise.all([sortedArray, getOdd(sortedArray), getEven(sortedArray)]);
          })
          .then(([sortedArray, oddArray, evenArray]) => {
            return getBiggestSumArray(oddArray, evenArray);
          })
          .then((result) => {
            console.log("bigger: ",result);
            const sum = getSum(result);
            resolve(sum % 2 === 0);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }

    static getOdd(sortedArray) {
      return new Promise((resolve, reject) => {
        const oddNumbers = sortedArray.filter((num) => num % 2 !== 0);
        resolve(oddNumbers);
      });
    }

    static getEven(sortedArray) {
      return new Promise((resolve, reject) => {
        const evenNumbers = sortedArray.filter((num) => num % 2 === 0);
        resolve(evenNumbers);
      });
    }

    static getBiggestSumArray(oddArr, evenArr) {
      return new Promise((resolve, reject) => {
        const oddSum = Data.getSum(oddArr);
        const evenSum = Data.getSum(evenArr);
        resolve(oddSum > evenSum ? oddArr : evenArr);
      });
    }

    static getSum(arr) {
      return arr.reduce((a, b) => a + b, 0);
    }
  }


  Data.process(sourceJSON)
    .then((result) => {
      console.log(result); // Output: true
    })
    .catch((error) => {
      console.error(error);
    });
