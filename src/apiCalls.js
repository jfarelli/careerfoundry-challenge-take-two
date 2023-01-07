const fetchCourses = async () => {
  // try {
    const response = await fetch(
      `https://private-e05942-courses22.apiary-mock.com/courses`
    );
    if (!response.ok) {
      const errorMessage = `There's been an error: ${response.statusText}`
      window.alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      const json = await response.json();
      return json;
    }
  // } catch (error) {
  //   console.log('ERROR!!!', error);
  // }
};


export default fetchCourses;