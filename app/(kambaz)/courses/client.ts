import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;

const COURSES_API = `${HTTP_SERVER}/api/courses`;
export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`,
  );
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course,
  );
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(
    `${COURSES_API}/${course._id}`,
    course,
  );
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/modules`,
    module,
  );
  return response.data;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`,
  );
  return response.data;
};
export const updateModule = async (module: any) => {
  const { data } = await axiosWithCredentials.put(
    `${MODULES_API}/${module._id}`,
    module,
  );
  return data;
};
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${HTTP_SERVER}/api/users/${userId}/course/${courseId}/enroll`,
  );
  return data;
};

export const unenrollUserInCourse = async (
  userId: string,
  courseId: string,
) => {
  const { data } = await axiosWithCredentials.delete(
    `${HTTP_SERVER}/api/users/${userId}/course/${courseId}/unenroll`,
  );
  return data;
};
