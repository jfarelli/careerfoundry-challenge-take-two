const fetchCourses = async () => {
  const response = await fetch(
    `https://private-e05942-courses22.apiary-mock.com/courses`
  );
  if (!response.ok) {
    const errorMessage = `There's been an error: ${response.statusText}`;
    window.alert(errorMessage);
    throw new Error(errorMessage);
  } else {
    const json = await response.json();
    return json;
  }
};

const fetchCourseDetails = async (path) => {
  const response = await fetch(
    `https://private-e05942-courses22.apiary-mock.com/courses/${path}`
  );
  if (!response.ok) {
    const errorMessage = `The server responded with a ${response.status} error. Please try again.`;
    window.alert(errorMessage);
    throw new Error(errorMessage);
  } else {
    const json = await response.json();
    return json;
  }
};

export { fetchCourses, fetchCourseDetails };
