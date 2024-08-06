function parentFunction() {
  const firstMessage = "i am looking for a job!";

  function childFunction() {
    const secondMessage = "i am find a job yesterday";
    console.log(firstMessage);
    console.log(secondMessage);
  }
  childFunction();
}

parentFunction();
